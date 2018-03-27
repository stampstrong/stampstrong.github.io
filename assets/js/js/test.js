//current energy consumption update picture
function update_member_profit(status) {
    $("#member_profit").text(String(status));
}
function update_orders(number) {
    $("#orders").text(String(number));
}
function update_ipo_margin(number1) {
    $("#ipo_margin").text(String(number1));
}
function update_Issue_Reports(number2) {
    $("#Issue_Reports").text(String(number2));
}
function update_Payments(number3) {
    $("#Payments").text(String(number3));
}
function update_Logistics(number4) {
    $("#Logistics").text(String(number4));
}
function update_Weekly_Orders(number5) {
    $("#Weekly_Orders").text(String(number5));
}
function update_Transactions(number6) {
    $("#Transactions").text(String(number6));
}
function update_Revenue(number7) {
    $("#Revenue").text(String(number7));
}


$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyA914GyOh2srowW5MKf4LjKYnn44o1yDpo",
      authDomain: "python-trainning-91676.firebaseapp.com",
      databaseURL: "https://python-trainning-91676.firebaseio.com",
      projectId: "python-trainning-91676",
      storageBucket: "python-trainning-91676.appspot.com",
      messagingSenderId: "18954595580"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

  //  total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_member_profit(parseInt(data.val()));
        } else if (data.key == 'orders') {
            update_orders(parseInt(data.val()));
        } else if (data.key == 'ipo_margin') {
              update_ipo_margin(parseInt(data.val()));
        } else if (data.key == 'Issue_Reports') {
                  update_Issue_Reports(parseInt(data.val()));
        } else if (data.key == 'Payments') {
                  update_Payments(parseInt(data.val()));
        } else if (data.key == 'Logistics') {
                  update_Logistics(parseInt(data.val()));
        } else if (data.key == 'Weekly_Orders') {
                  update_Weekly_Orders(parseInt(data.val()));
        } else if (data.key == 'Transactions') {
                  update_Transactions(parseInt(data.val()));
        } else if (data.key == 'Revenue') {
                  update_Revenue(parseInt(data.val()));
        } else {

            console.log("need to parse this key " + data.key)
        }
    });

});
