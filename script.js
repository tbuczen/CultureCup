$(document).ready(function(){
    $("#bt1").on("click",function(){
        $("#start").fadeOut(500, function(){
            $("#main").fadeOut(0).fadeIn(500);
        })
    });

    // $("#getData").on("click",function(){
    //     // $.ajax(function(){
    //     //
    //     // });
    //     //var data = { lang = "", long = ""}
    //     ///TODO pokaz na mapie trase
    // })
    
})
