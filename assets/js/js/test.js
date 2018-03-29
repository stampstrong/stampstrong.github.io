//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + String(Math.floor(Math.random()*10))).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(500)
                    .height(400);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
$( document ).ready(function() {
    console.log("starting document!!!!");
    $(function ($) {
             $("#firebasebutton").click(function (evt) {
               console.log("firebasebutton was clicked")
               writeUserData('warodom', 'warodom khamphanchai',
               'kwarodom@vt.edu', 'https://pbs.twimg.com/profile_images/966896631147765760/AJ836huS_400x400.jpg')
             })
         });
    // Initialize Firebase
    console.log("Initialize Firebase");
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA914GyOh2srowW5MKf4LjKYnn44o1yDpo",
      authDomain: "python-trainning-91676.firebaseapp.com",
      databaseURL: "https://python-trainning-91676.firebaseio.com",
      projectId: "python-trainning-91676",
      storageBucket: "python-trainning-91676.appspot.com",
      messagingSenderId: "18954595580"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))

        }
    });

});
