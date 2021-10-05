var firebaseConfig = {
      apiKey: "AIzaSyDLXMziHuhvGR6sVoTddjM0WZDQ7V2LwXA",
      authDomain: "kwitterapp-8e715.firebaseapp.com",
      databaseURL: "https://kwitterapp-8e715-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-8e715",
      storageBucket: "kwitterapp-8e715.appspot.com",
      messagingSenderId: "863611227942",
      appId: "1:863611227942:web:3253d28657046d552b3be7"
    };
    
    firebase.initializeApp(firebaseConfig);

 x = localStorage.getItem("user_name") + "-Welcome" + "!!!";
 
document.getElementById("welcome").innerHTML = x;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("room name - " + Room_names);
       row = "<div class ='room_name' id=" + Room_names +" onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
      });});}
getData();


function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

purpose: "adding room name"

});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";






}