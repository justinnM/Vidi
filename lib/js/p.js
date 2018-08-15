var make_video_btn = document.getElementById("make_vid")

var database = firebase.database().ref()


function updateDB(event){

  

   event.preventDefault();

   var username = document.getElementById("username").innerHTML

  

    //Update database here

   var profile_data = {

  USERNAME: username,


  }

  storageRef.child(upload_data.VID_REF).put(upload_data.VID_DATA).then(function(snapshot) {

  console.log('Uploaded a blob or file!');

  });

    database.push(upload_data)
    console.log("video uploaded")
    alert("your video is now uploaded")

  
}

function homePage(){

window.location.href = "index.html"

}