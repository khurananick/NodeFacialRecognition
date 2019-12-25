let BASE_URL = 'https://benerdy.net';
let MODEL_URL = 'https://benerdy.net/models';
let PEOPLE_DATA_URL = 'https://benerdy.net/data';
let ALL_LABELED_FACE_DESCRIPTORS;

function getBase64FromImgFile(file, callback) {
  var reader = new FileReader();
  reader.onload = function(readerEvent) {
     var image = new Image();
     image.onload = function(imageEvent) {
        var max_size = 200;
        var w = image.width;
        var h = image.height;
        if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
        } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(image, 0, 0, w, h);
        if (file.type == "image/jpeg") {
           var dataURL = canvas.toDataURL("image/jpeg", 1.0);
        } else {
           var dataURL = canvas.toDataURL("image/png");
        }
        callback(dataURL);
     }
     image.src = readerEvent.target.result;
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
  reader.readAsDataURL(file);
}

function loadRemoteModels() {
  faceapi.loadSsdMobilenetv1Model(MODEL_URL).then(function() {
    faceapi.loadFaceLandmarkModel(MODEL_URL).then(function() {
      faceapi.loadFaceRecognitionModel(MODEL_URL).then(function() {
        labelFaceDescriptions();
      });
    });
  });
}

function labelFaceDescriptions() {
  var imgs = [];
  $("img.person_img").each(function(index,elem) {
    imgs.push(elem);
  });
  faceapi.computeFaceDescriptor(imgs).then(function(descriptors) {
    if(descriptors) {
      $.ajax({
        method: "post",
        url: (BASE_URL + "/person/"+person_id+"/descriptors"),
        data: { descriptors: JSON.stringify(descriptors) }
      }).done(function(resp) {
        alert("Done.");
      });
    } else console.log("no faces detected for ", person);
  });
}

$(function() {
  (function imageUploadsFormHandler() {
    var $add_btn   = $("form#uploads button#add");
    var $files_inp = $("form#uploads input#files");
    var files_inp  = $files_inp[0];
    var resized_files = [];
    function iterateFiles(index) {
      var file = files_inp.files[index];
      if(!file) return submitFiles();
      getBase64FromImgFile(file, function(dataURL) {
        resized_files.push({person_id: files_inp.dataset.person_id, base64:dataURL});
        iterateFiles((index += 1));
      });
    }
    function submitFiles() {
      console.log(resized_files);
      $.ajax({
        method: "POST",
        enctype: 'multipart/form-data',
        url: "/person/"+files_inp.dataset.person_id+"/base64images",
        data: {data: resized_files}
      }).done(function(resp) {
        document.location.reload();
      });
    }
    $add_btn.on("click", function(e) {
      e.preventDefault();
      var index = 0;
      iterateFiles(index);
    });
  })();

  (function reloadDescriptors() {
    var $btn = $("button#reloadDescriptors");
    $btn.on("click", function(e) {
      e.preventDefault();
      loadRemoteModels();
    });
  })();
});
