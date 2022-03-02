$(function(){
    
    $(".menu_list li.m").on("click",function(){ 
        $(this).children("ul").slideToggle(250);
        $(this).siblings().children("ul").hide();
        $(this).toggleClass("on").siblings().removeClass("on"); 
        $(".menu_list li.m").parents(".gnb").parent().siblings(".submenu_list_bg").slideDown();
        
    }).mouseleave(function(){
        $(".menu_list li.m ul").hide();
        $(this).removeClass("on");
    });
    
    
    $(":not(.menu_list a)").focus(function(){ 
        $(".menu_list li.m ul").hide();
        $(".menu_list li.m").removeClass("on");
    });
    
    $(".menu_btn").click(function(){
        $(".gnb nav").css("left", "0");
        $(".gnb nav .top_menu").css("display", "block");
        $("body").css("overflow", "hidden");
        $(".menu_close_btn").css("display", "block");
    });
    
    $(".menu_close_btn").click(function(){
        $(".gnb nav").css("left", "-200%");
        $("body").css("overflow", "auto");
        $(".menu_close_btn").css("display", "none");
    });
    
    $(window).resize(function(){
        $(".menu_close_btn").css("display", "none");
    });
    
    
    
    
    
    
    /*$(window).matchMedia( "screen and (max-width: 1024px)",function(){
        
        $(":not(.gnb nav)").click(function(){ 
        $(".gnb nav").css("left", "-200%");
    });
        
    });*/
    
    
    
    
});