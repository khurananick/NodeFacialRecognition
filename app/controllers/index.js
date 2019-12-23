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
    if(!req.body.name || !req.body.imdb_url)
      return res.redirect('/');

    if(!req.body.imdb_url.match(/^http/))
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

  router.post("/picture/add/:person_id", function(req, res) {
    var mimetype = "data:"+req.file.mimetype+";base64,"
    var bitmap = fs.readFileSync(req.file.path);
    var base64 = mimetype + (new Buffer(bitmap).toString('base64'));
    req.globals.db.query('insert into person_face_images set ?', {person_id: req.params.person_id, base64: base64}, function (error, results, fields) {
      req.globals.db.query('update people set descriptors = null where id = ?', req.params.person_id, function (error, results, fields) {
        return res.redirect('/person/'+req.params.person_id);
      });
    });
  });

  router.post("/person/:id/descriptors", function(req, res) {
    if(!req.body.descriptors)
      return res.json({erro: 'MISSING_DATA'});
    req.globals.db.query('update people set ? where id = ?', [{descriptors: req.body.descriptors}, req.params.id], function (error, results, fields) {
      return res.json({success: true});
    });
  });

  router.get("/data", function(req, res) {
    var people = {};
    var query = `
      select p.id, p.name, p.imdb_url, p.descriptors, null as base64
      from people p
      where p.descriptors is not null
      union
      select p.id, p.name, p.imdb_url, p.descriptors, pfi.base64
      from people p
        left join person_face_images pfi on pfi.person_id = p.id
      where p.descriptors is null
    `;
    req.globals.db.query(query, function(error, results, fields) {
      for(var index in results) {
        var row = results[index];
        if(!people[row.id])
          people[row.id] = {
            person_id: row.id,
            name: row.name,
            imdb_url: row.imdb_url,
            descriptors: (row.descriptors ? row.descriptors.toString() : null),
            images: []
          };
        if(row.base64)
          people[row.id].images.push(row.base64.toString());
      }
      return res.json(people);
    });
  });
};
