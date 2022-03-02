$(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 800 ){ 
            $(".up").addClass("on"); 
        }else{
            $(".up").removeClass("on");
        }
    });

    $(".up").click(function( e ){
        e.preventDefault();
        $(window).scrollTop(0);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() < 300 ){ 
            $(".down").addClass("on"); 
        }else{
            $(".down").removeClass("on");
        }
    });

    $(".down").click(function( i ){
        i.preventDefault();
        $(window).scrollTop($(document).height());
    });
             
});