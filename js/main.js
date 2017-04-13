$(document).ready(function () {
    var radioselect = null;
    var multiselect = [];
    var cash = 0;

    var positionUpdateInterval = setInterval(positionUpdate, 20*1000);

    function positionUpdate() {
        
    }

    //save input values
    $(".radio").on("click", function () {
        id = $(this).data("type");
        $(".radio").css("background-color", "white");
        if (id === radioselect) {
            radioselect = null;
        } else {
            $(this).css("background-color", "#FD8A55");
            radioselect = id;
        }
    });

    $("#cash").on("input", function () {
        $("#cashAmount").text($(this).val());
        cash = $(this).val();
    });

    $(".multi").on("click", function () {
        var id = $(this).attr("id").substr(1, 2);
        var val = $(this).data("val");
        key = multiselect.indexOf(val);
        if (multiselect[key] != null) {
            $(this).css("background-color", "white");
            multiselect.splice(key, 1);

        } else {
            $(this).css("background-color", "#FD8A55");
            multiselect.push(val);
        }
    });

    //MAP INIT
    var myLatLng;
    var directionsService = new google.maps.DirectionsService();
    var map;

    initMap();

    var routes = [];

    var image = new google.maps.MarkerImage(
        'http://www.clipartkid.com/images/308/orange-dot-clip-art-at-clker-com-vector-clip-art-online-royalty-ifHXTz-clipart.png',
        null, // size
        null, // origin
        new google.maps.Point( 8, 8 ), // anchor (move to center of marker)
        new google.maps.Size( 17, 17 ) // scaled size (required for Retina display icon)
    );


    function refreshMap(){
        for (var i = 0; i < routes.length; i++) {
            routes[i].setMap(null);
        }
        routes=[];
    }

    function drawRoute(latLng, destination) {
        /*
         DRIVING BICYCLING TRANSIT WALKING */
        dest = {
            origin: latLng,
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode.WALKING
        }
        directionsService.route(dest, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK){
                var walkPath = new google.maps.Polyline({
                  path: [],
                  strokeColor: '#F68E56',
                  strokeWeight: 3,
                });
                
                var bounds = new google.maps.LatLngBounds();
                var legs = response.routes[0].legs;
                
                for (i = 0; i < legs.length; i++) {
                    var steps = legs[i].steps;
                    for (j = 0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (k = 0; k < nextSegment.length; k++) {
                            walkPath.getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }
                walkPath.setMap(map);
                routes.push(walkPath);
                map.fitBounds(bounds); 
            }
        });
        
        positionMarker = new google.maps.Marker({
            position: destination,
            map: map,
            optimized: false,
            icon: image,
        });
    }
    
    function initMap() {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
            
            map = new google.maps.Map(
                document.getElementById("map"), {
                center: myLatLng,
                zoom: 14,
                styles: styleDay
            });
            
            positionMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'I might be here',
                optimized: false,
                icon: image,
            });

            positionCircle1Km = new google.maps.Circle({
                center: myLatLng,
                map: map,
                fillColor : "#ccc",
                strokeColor : "#F68E56",
                strokeWeight: 2,
                radius: 1000
            });

        },
        function (error) {
            console.log("Localisation error");
            console.log(error);
        },{
            maximumAge: 10000, // czas dostępu do danych
            timeout: 15000     // po tym czasie error jeśli brak danych
        });
    }

    $("#search").on("click", function () {
        $list = $("#list");
        $list.html("").show();
        $('html, body').animate({
            scrollTop: $list.offset().top
        }, 300);

        var d = getPlaces();

        if (d.length > 0) {
            $.each(d, function (index, o) {
                $new = $( "#listTpl" ).clone();
                        
                ratesHtml = "";
                for (var i = 0; i < o.rates.length; i++) {
                    var r = o.rates[i];
                    ratesHtml += "<div><span>" + r.user + ": </span><p style='margin-top: 0;'>" + r.opinion + "</p></div>";
                }
                        
                $new.find(".place-name").html(o.name);
                $new.find(".place-price").html("Od " + o.cash + " zł");
                $new.find(".details").html( o.description);
                $new.find(".recent-opinions").html(ratesHtml);
                $new.find(".navigate").data("address",o.address);
                        
                $new.appendTo( "#list" );
            });
        } else {
            $list.append('<div class="list-row">Niestety nie znalazłem pasującego miejsca</div>');
        }
    });

    //Expand place to see its details
    $('body').on("click", ".more-info", function () {
        var state = $(this).data("state");
        var d = $(this).parent().parent().find(".details");
        if (state == 0) {
            $(this).data("state", 1);
            d.fadeIn(500);
        } else {
            $(this).data("state", 0);
            d.fadeOut(300);
        }
    })

    $("#backToMain").on("click", function () {

    });

    $('body').on("click", ".navigate", function () {
        var address = $(this).data("address");
        refreshMap();
        drawRoute(myLatLng, address);
    });

    //Function filtering places
    function getPlaces()
    {
        var resdata = [];
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (d.type == radioselect) {
                if (multiselect.length > 0) {
                    for (var j = 0; j < multiselect.length; j++) {
                        for (var y = 0; y < d.options.length; y++) {
                            if (
                                    (d.cash <= parseInt(cash) || cash === 0)
                                    && d.options[y] === multiselect[j]
                                    )
                                resdata.push(d);
                        }
                    }
                } else {
                    if (d.cash <= parseInt(cash) || cash === 0)
                        resdata.push(d);
                }
            }
        }
        return resdata;
    }

});
