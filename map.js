/**
 * Created by urias on 29.10.16.
 */
function initMap() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)

            // bieżąca pozycja lat i lng,
            // tu rysujemy marker i streetview
            var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
        },
        function (error) {
            console.log("problem z lokalizacją")
        },
        {
            maximumAge: 10000,    // czas dostępu do danych
            timeout: 15000,       // po tym czasie error jeśli brak danych
            enableHighAccuracy: true // dokładność
        }
    )
}