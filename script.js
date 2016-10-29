$(document).ready(function(){
    //alert("jquery dziala \nculture date")\
    
    $("#bt1").on("click",function(){
        $("#start").fadeOut(500, function(){
            $("#main").fadeOut(0)
            $("#main").fadeIn(500)
        })
    })

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
        
        
    })  
})
