///var DateRestore1 = $("#DateRestore1").Date();
function writeUserData(DateOutage,DateRestore1,EquipWork,wheather,status,cause,cause_detail){//,x_coord,y_coord){//, EquipWork, EventID,cause,cause_detail,status,wheather,x_coord,y_coord) {
  firebase.database().ref('OutageCause/' + String(Math.floor(Math.random()*10))).set({
    DateRestore1: DateRestore1,
    DateOutage: DateOutage,
    EquipWork: EquipWork,
    wheather:wheather,
    status:status,
    cause:cause,
    cause_detail:cause_detail,
  //  EventID:EventID,
//    x_coord:x_coord,
//    y_coord:y_coord,

  });
}

//จะรันก่อนเมื่อเปิดหน้า index
$( document ).ready(function() {
    console.log("starting document!!!!");


//สั่งงานปุ่มเมื่อคลิก
$(function ($) {

         $("#firebasebutton").click(function (evt) {
           var cause_detail = document.getElementById("cause_detail").value;
           var DateRestore1 = document.getElementById("DateRestore1").value;
           var DateOutage = document.getElementById("DateOutage").value;
           var EquipWork = document.getElementById("EquipWork").value;
           var wheather = document.getElementById("wheather").value;
           var status = document.getElementById("status").value;
           var cause = document.getElementById("cause").value;
           //var x_coord = document.getElementById("x_coord").value;
           //var y_coord = document.getElementById("y_coord").value;

           console.log(DateOutage,DateRestore1,EquipWork,wheather,status,cause,cause_detail);

           console.log("firebasebutton was clicked")
           writeUserData(DateOutage,DateRestore1,EquipWork,wheather,status,cause,cause_detail)//,x_coord,y_coord)//#DateRestore1, EquipWork, EventID,cause,cause_detail,status,wheather,x_coord,y_coord)
         })
     });

//การส่งจากหน้า html
        // function myFunction() {
      //       var x = document.getElementById("myText").value;
    //         document.getElementById("demo").innerHTML = x;
    //         console.log(x);
    //     }




    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      "apiKey": "AIzaSyA914GyOh2srowW5MKf4LjKYnn44o1yDpo",
      "authDomain": "python-trainning-91676.firebaseapp.com",
      "databaseURL": "https://python-trainning-91676.firebaseio.com",
      "projectId": "python-trainning-91676",
      "storageBucket": "python-trainning-91676.appspot.com",
      "messagingSenderId": "18954595580"
  };
    firebase.initializeApp(config);


  });
