$(document).ready(function(){
    //alert("jquery dziala \nculture date")

    setTimeout(function(){ 
        $("#start").fadeOut(500, function(){
            $("#main").fadeOut(0).fadeIn(500);
            $("#sticky-header").show();
        })
    }, 2000);
    

    $("#getData").on("click",function(){
        var data = {
            lat: 50.0259406,
            lng: 19.9177201
        }
        
        var data = [data.lat ,data.lng]
        console.log(data)
        tab.push(data)

        for(var i=0; i<tab.length; i++){
            var myLatLng = {lat: tab[i][0], lng: tab[i][1]};
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
        }

        /*
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map);

var flightPlanCoordinates = [
          {lat: tab[0][0], lng: tab[0][1]},
          {lat: tab[1][0], lng: tab[1][1]},
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map)
        */
    })
})
