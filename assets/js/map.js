  // Note: This example requires that you consent to location sharing when
  // prompted by your browser. If you see the error "The Geolocation service
  // failed.", it means you probably did not give permission for the browser to
  // locate you.
  $( document ).ready(function() {
  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 14.812975, lng: 100.811338},
      zoom: 10

    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
       var marker = new google.maps.Marker({
             map: map,
             anchorPoint: new google.maps.Point(0, -29)

            });

        map.setCenter(pos);
        map.setZoom(16);
        marker.setPosition(pos);
        marker.setVisible(true);
        infoWindow.setPosition(pos);
        infoWindow.setContent('ตำแหน่งเหตุการณ์กระแสไฟฟ้าขัดข้อง');
        infoWindow.open(map,marker);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
}
