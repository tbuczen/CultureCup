var ccupMap = {
    map: null,
    myLatLng: null,
    routes: [],
    directionsService: null,
    geocoder: null,
    icon: null,
    init: function(){
        this.icon = new google.maps.MarkerImage(
            'http://www.clipartkid.com/images/308/orange-dot-clip-art-at-clker-com-vector-clip-art-online-royalty-ifHXTz-clipart.png',
            null, // size 
            null, // origin
            new google.maps.Point( 8, 8 ), // anchor (move to center of marker)
            new google.maps.Size( 17, 17 ) // scaled size (required for Retina display icon)
        ),
        
        this.directionsService = new google.maps.DirectionsService();
        this.geocoder = new google.maps.Geocoder();
        var that = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            that.myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
            that.map = new google.maps.Map(
                document.getElementById("map"), {
                center: that.myLatLng,
                zoom: 14,
                styles: styleDay
            });
            
            positionMarker = new google.maps.Marker({
                position: that.myLatLng,
                map: that.map,
                title: 'I might be here',
                optimized: false,
                icon: that.icon,
            });

            positionCircle1Km = new google.maps.Circle({
                center: that.myLatLng,
                map: that.map,
                fillColor : "#ccc",
                strokeColor : "#F68E56",
                strokeWeight: 2,
                radius: 1000
            });

        },
        function (error) {
            console.warn("Localisation error : " + error);
        },{
            maximumAge: 10000, // czas dostępu do danych
            timeout: 15000     // po tym czasie error jeśli brak danych
        });
    },
    drawRouteTo: function(destination){
        /*DRIVING BICYCLING TRANSIT WALKING */
        dest = {
            origin: this.myLatLng,
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        var that = this;
        this.directionsService.route(dest, function(response, status) {
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
                walkPath.setMap(that.map);
                that.routes.push(walkPath);
                that.map.fitBounds(bounds); 
            }
        });
        
        positionMarker = new google.maps.Marker({
            position: this.addressToPosition(destination),
            map: this.map,
            optimized: false,
            icon: this.icon
        });
    },
    refresh: function(){
        for (var i = 0; i < this.routes.length; i++) {
            this.routes[i].setMap(null);
        }
        this.routes=[];
    },
    addressToPosition: function(address){
        this.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                return results[0].geometry.location;
            } else {
                console.warn("Geocode was not successful for the following reason: " + status);
                return [];
            }
        });
    }
};
