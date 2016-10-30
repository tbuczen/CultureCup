$(document).ready(function(){
    var radioselect = null;
    var multiselect = [];
    var cash = 0;

    $("#wrapper").hide();
    //welcome screen fade
    setTimeout(function(){
        $("#start").fadeOut(400);
        $("#wrapper").fadeIn(400);
    }, 1100);


    //save input values
    $(".radio").on("click",function(){
        id = $(this).data("type");
        $(".radio").css("background-color","white");
        if(id == radioselect){
            radioselect = null;
        }else{
            $(this).css("background-color","#FD8A55");
            radioselect = id;
        }
    });

    $("#cash").on("input",function(){
        $("#cashAmount").text($(this).val());
        cash = $(this).val();
    });

    $(".multi").on("click",function(){
        var id = $(this).attr("id").substr(1,2);
        var val = $(this).data("val");
        key = multiselect.indexOf(val);
        if(multiselect[key] != null){
            $(this).css("background-color","white");
            multiselect.splice(key, 1);

        }else{
            $(this).css("background-color","#FD8A55");
            multiselect.push(val);
        }
    });

    var myLatLng;
    var map;
    navigator.geolocation.getCurrentPosition(function (position) {
        myLatLng = [ position.coords.latitude,  position.coords.longitude];
        map = $('#map').gmap3({
            center:myLatLng,
            zoom:13,
            disabledDefaultUi: true,
        });

        map.marker([
            {position:myLatLng,icon: "http://maps.google.com/mapfiles/marker_orange.png"},
        
        ])
    },
    function (error) {
        console.log("Localisation error");
        console.log(error);
    },
    {
        maximumAge: 10000,    // czas dostępu do danych
        timeout: 15000     // po tym czasie error jeśli brak danych
    });

    $("#search").on("click",function(){
        $list = $("#list");
        $list.html("").show();
        $('html, body').animate({
            scrollTop: $list.offset().top
        }, 300);

        var d = getPlaces();

        if(d.length > 0) {
            $.each(d, function (index, o) {
                ratesHtml = "<div style='text-align: center'>";
                for (var i = 0; i < o.rates.length; i++) {
                    var r = o.rates[i];
                    ratesHtml += "<div><span>" + r.user + ": </span><p style='margin-top: 0;'>" + r.opinion + "</p></div>";
                }

                var mapHtml = "";

                var address = o.address;
                ratesHtml += "<div>";
                tpl = '<div class="list-row" data-address="' + address + '" data-state="0"><div class="name"><p>'
                    + o.name + '</p><p>Cena od ' + o.cash + '</p></div><div class="details">' + "adres: " + o.address + "<br/><br/> opis: " + o.description +
                    '<br/><div id="map' + i + '"><br/> opinie: ' + ratesHtml + '</div>';
                $(".details").fadeOut(0);
                $list.append(tpl);
            });
        }else{
            $list.append('<div class="list-row">Niestety nie znalazłem pasującego miejsca</div>');
        }
    });

    //Expand place to see its details
    $('body').on("click",".list-row",function(){
        var state = $(this).data("state");
        var address = $(this).data("address");

        var d = $(this).find(".details");
        if(state == 0){
            $(this).data("state",1);
            d.fadeIn(500);
        }else{
            $(this).data("state",0);
            d.fadeOut(300);
        }
    })

    $("#backToMain").on("click",function(){

    });

    $("#getData").on("click",function(){
        var data = [50.0259406 ,19.9177201];
        tab.push(data)

        for(var i=0; i<tab.length; i++){
            var myLatLng = {lat: tab[i][0], lng: tab[i][1]};
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
        }

    });

    //Function filtering places
    function getPlaces()
    {
        // var localdata = JSON.parse(data);
        var resdata = [];
        for(var i=0;i<data.length;i++)
        {
            var d = data[i];
            if(d.type == radioselect)
            {
                if(multiselect.length > 0) {
                    for(var j=0;j<multiselect.length;j++) {
                        for (var y = 0; y < d.options.length; y++) {
                            if (d.cash <= parseInt(cash) && d.options[y] == multiselect[j])
                                resdata.push(d);
                        }
                    }
                }else{
                    if (d.cash <= parseInt(cash)) resdata.push(d);
                }
            }
        }
        return resdata;
    }

});
