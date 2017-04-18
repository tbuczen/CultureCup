/* global ccupMap */
$(document).ready(function () {
    var radioselect = null;
    var multiselect = [];
    var cash = 0;
    
    ccupMap.init();
    
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

    $('body').on("click touchstart", ".navigate", function () {
        var address = $(this).data("address");
        ccupMap.refresh();
        ccupMap.drawRouteTo(address);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 200);
    });

    //Function filtering places
    function getPlaces(){
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
