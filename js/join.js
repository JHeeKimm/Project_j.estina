$(function(){
    
    //포커스된 인풋칸 색변경
    $(".basic_info input, .add_info input").focus(function(){
        $(this).addClass("focused");
    }).blur(function(){
        $(this).removeClass("focused");
    });
    
    
    
    //체크박스 전체선택
    $("#agree_all").on("click",function(){
        
        var checked = $(this).is(":checked");
        
        if(checked){
            $(".agree>ul>li>input").prop("checked",true);
        }else{
            $(".agree>ul>li>input").prop("checked",false);
        }
        
    });
    
    //한개의 체크박스 선택해제시 전체선택 체크박스도 해제
    $(".agree_normal").on("click",function(){
        
        var isChecked = $(this).is(":checked").length==5
        
        if(isChecked){
            $("#agree_all").prop("checked",true);
        }else{
            $("#agree_all").prop("checked",false);
        };
        
    });
    
    
    // 체크박스 모두 선택하면 전체동의 체크박스도 선택
    var agreeCount = ($(".agree_normal").length);

    $(".agree_normal").each(function(){
        $(this).change(function(){
            console.log("text");
            if($(".agree_normal:checked").length == agreeCount ){
                console.log("done");
                $("#agree_all").prop("checked",true);
            }
        });
    });  

    
    
    //약관 보기
    $(".agree ul li span").click(function(){
        $(this).siblings(".policy").slideToggle();
        $(this).toggleClass("close_policy");
        $(this).toggleClass("view_policy");
    });
    
    
});