
/*제이에스티나 연혁*/
$(function(){
    // transform 후크
    jQuery.Tween.propHooks["transform"] = {
      get: function(tween) {
        return $(tween.elem).css("transform");
      },
      set: function(tween) {
        $(tween.elem).css("transform", "translateY(" + (tween.pos * 0) + "px)");
      }
    };
    
    //화면열때 history 탭메뉴가 내려옴
    $("ul.tab_menu li:nth-child(1)").delay(0).animate({opacity:1,transform: "translateZ(0)"}, 500, function(){
        $("ul.tab_menu li:nth-child(2)").delay(200).animate({opacity:1,     transform: "translateZ(0)"}, 500, function(){
        $("ul.tab_menu li:nth-child(3)").delay(400).animate({opacity:1,     transform: "translateZ(0)"}, 500);
        });
    });
    
    
    //탭메뉴
    $("ul.tab_menu li a").click(function(){
        
         //탭메뉴 클릭시 길이 길어짐
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        
        
        //탭메뉴 인덱스 넘버와 같은 인덱스 넘버 탭이 보여짐
        
       var tabI = $(this).parent().index();
       
        console.log(tabI);
        $(".tab").eq(tabI).addClass("on").siblings().removeClass("on");
    });
        
    
    //브레드스크럼 드랍메뉴
    $(".breadcrumb > ul > li.here_box").on("mouseenter focusin",function(){
        $("ul.drop_menu").stop().slideDown();
        $(".drop_arrow").css({"transform":"rotate(180deg)"});
    }).mouseleave(function(){
       
       $("ul.drop_menu").stop().slideUp(); $(".drop_arrow").css({"transform":"rotate(0)"});
    });
    
    
        
});