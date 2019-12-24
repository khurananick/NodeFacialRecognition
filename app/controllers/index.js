module.exports = function(router) {
  var Helper    = require('./helper.js');
  var fs        = require('fs');
  var glob      = require('glob');

  router.get("/", function(req, res) {
    req.globals.db.query('select * from people order by name asc', function (error, results, fields) {
      if(!error) {
        res.locals.people = results;
      } else console.log(error);
      return res.render("index", { title: 'Homepage' });
    });
  });

  router.post("/person/add", function(req, res) {
    if(!req.body.name || !req.body.website_url)
      return res.redirect('/');

    if(!req.body.website_url.match(/^http/))
      return res.redirect('/');

    req.globals.db.query('insert into people set ?', req.body, function (error, results, fields) {
      return res.redirect('/');
    });
  });

  router.get("/person/:id", function(req, res) {
    req.globals.db.query('select * from person_face_images where person_id = ?', req.params.id, function (error, results, fields) {
      if(!error) {
        res.locals.person_id = req.params.id;
        res.locals.images  = results;
      } else console.log(error);
      return res.render("person", { title: 'Homepage' });
    });
  });

  router.get("/person/:id/img", function(req, res) {
    req.globals.db.query('select * from person_face_images where person_id = ? order by id desc limit 1', req.params.id, function (error, results, fields) {
      var base64 = results[0].base64.toString();
      var img = Buffer.from(base64.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''), 'base64');
      var mimetype = base64.toString().split(";")[0].split(":")[1];
      res.writeHead(200, {
        'Content-Type': mimetype,
        'Content-Length': img.length
      });
      return res.end(img);
    });
  });

  router.post("/picture/add/:person_id", function(req, res) {
    var mimetype = "data:"+req.file.mimetype+";base64,"
    var bitmap = fs.readFileSync(req.file.path);
    var base64 = mimetype + (new Buffer(bitmap).toString('base64'));
    req.globals.db.query('insert into person_face_images set ?', {person_id: req.params.person_id, base64: base64}, function (error, results, fields) {
      req.globals.db.query('update people set descriptors = null, descriptors_set_at = null where id = ?', req.params.person_id, function (error, results, fields) {
        return res.redirect('/person/'+req.params.person_id);
      });
    });
  });

  router.post("/person/:id/descriptors", function(req, res) {
    if(!req.body.descriptors)
      return res.json({erro: 'MISSING_DATA'});
    req.globals.db.query('update people set ? where id = ?', [{descriptors: req.body.descriptors, descriptors_set_at: (new Date())}, req.params.id], function (error, results, fields) {
      if(error) return res.json({error: error});
      req.globals.db.query('select descriptors_set_at from people where id = ?', req.params.id, function (error, results, fields) {
        return res.json({success: true, version: results[0].descriptors_set_at});
      });
    });
  });

  router.get("/data", function(req, res) {
    var query = `
      select *
      from (
        select p.id, p.name, p.website_url, p.donations_url, p.descriptors, p.descriptors_set_at, null as base64
        from people p
        where p.descriptors is not null
        union
        select p.id, p.name, p.website_url, p.donations_url, p.descriptors, p.descriptors_set_at, pfi.base64
        from people p
          left join person_face_images pfi on pfi.person_id = p.id
        where p.descriptors is null
      )sub
      order by sub.descriptors_set_at desc
    `;
    var people = {};
    req.globals.db.query(query, function(error, results, fields) {
      var first = results[0];
      for(var index in results) {
        var row = results[index];
        if(!people[row.id])
          people[row.id] = {
            person_id: row.id,
            name: row.name,
            website_url: row.website_url,
            donations_url: row.donations_url,
            descriptors: (row.descriptors ? row.descriptors.toString() : null),
            descriptors_set_at: row.descriptors_set_at,
            images: []
          };
        if(row.base64)
          people[row.id].images.push(row.base64.toString());
      }
      return res.json({version: first.descriptors_set_at, people: people});
    });
  });

  router.get("/data/version", function(req, res) {
    req.globals.db.query('select id from people where descriptors is null', function (error, results, fields) {
      if(error)
        return res.json({error: error});
      if(results[0])
        return res.json({version: (new Date())})
      req.globals.db.query('select descriptors_set_at from people order by descriptors_set_at desc limit 1', function (error, results, fields) {
        res.json({version: results[0].descriptors_set_at});
      });
    });
  });

  router.get("/images/all/resize", function(req, res) {
    return res.json({error: 'DISABLED'});
    const sharp = require('sharp');
    req.globals.db.query('select * from person_face_images pfi where char_length(pfi.base64) > 30000', function (error, results, fields) {
      if(error) return res.json({error: error});
      if(!results) return res.json({error: "NO_RESULTS_FOUND"});
      var index = 0;
      function iterateImages(index) {
        var row = results[index];
        if(!row) return res.json({success: true});

        var base64Image = row.base64.toString();
        var parts = base64Image.split(';');
        var mimType = parts[0].split(':')[1];
        var imageData = parts[1].split(',')[1];
        var img = new Buffer(imageData, 'base64');
        sharp(img)
          .jpeg({quality:100,progressive:true})
          .resize(150)
          .toBuffer()
          .then(resizedImageBuffer => {
            let resizedImageData = resizedImageBuffer.toString('base64');
            let resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
            req.globals.db.query('update person_face_images set base64 = ? where id = ?', [resizedBase64, row.id], function() {
              req.globals.db.query('update people set descriptors = null, descriptors_set_at = null where id = ?', row.person_id, function() {
                iterateImages((index+1));
              });
            });
          })
          .catch(error => {
            console.log(error);
          })
      }
      iterateImages(index);
    });
  });
};
