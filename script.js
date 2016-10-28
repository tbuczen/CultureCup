$(document).ready(function(){
    //alert("jquery dziala \nculture date")\
    
    $("#bt1").on("click",function(){
        $("#start").fadeOut(500, function(){
            $("#main").fadeOut(0)
            $("#main").fadeIn(500)
        })
    })
    
})
