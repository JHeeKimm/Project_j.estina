$(function(){
    $(".skip_nav a").focus(function(){
        $(this).parent().css({"position":"static", "top":0});
    }).blur(function(){
        $(this).parent().css({"position":"absolute", "top":-61});
    });
    
});