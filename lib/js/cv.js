var videoPreview = document.getElementById("video_preview")

var drag_box = document.getElementById("drag_files")
var drag_tutorial = document.getElementById("drag_tutorial")

var files
var tutorialFiles

function handleFileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();

    files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    
    var output = [];

    for(var i = 0, f; f = files[i]; i++) {

      output.push('<p><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</p>');

    }

    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  

  }


  function previewFile() {

            var i 

            if(files.length > 0){
            
              i = files.length - 1

              }else{

                null

              }

                var file    = files[i];

                var reader  = new FileReader();

                reader.addEventListener("load", function () {

                  videoPreview.src = reader.result;

                  console.log("video displayed")
                  console.log(files[i])
                  
                }, false);

                if (file) {

                  reader.readAsDataURL(file);

              }

              }


  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  
  drag_box.addEventListener('dragover', handleDragOver, false);
  drag_box.addEventListener('drop', handleFileSelect, false);

  





  var post_btn = document.getElementById("post")
  post_btn.addEventListener("click", updateDB)

  var home_btn = document.getElementById("watch")
  home_btn.addEventListener("click", homePage)


  var database = firebase.database().ref()
  var storageRef = firebase.storage().ref();




function updateDB(event){

  var i

  if(files.length > 0){
      
      i = files.length - 1

  }else{

      null

  }


   event.preventDefault();

   var title = document.getElementById("title_field").value

   var video_data = files[i]

   var description = document.getElementById("description").value

    //Update database here

   var upload_data = {

    TITLE: title,
    VID_DATA: video_data,
    VID_REF: video_data.name,
    DESCRIPTION: description


    }

    storageRef.child(upload_data.VID_REF).put(upload_data.VID_DATA).then(function(snapshot) {

    console.log('Uploaded Video!');

    });


      database.push(upload_data)
      console.log("video uploaded")
      alert("your video is now uploaded")

    
 }

function homePage(){

window.location.href = "index.html"

}