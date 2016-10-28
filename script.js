$(document).ready(function(){
    //alert("jquery dziala \nculture date")\
    $("#bt1").on("click",function(){
        $("#start").fadeOut(500, function(){
            $("#main").fadeIn(500)
        });
    })
})
