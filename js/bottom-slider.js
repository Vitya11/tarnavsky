(function ($) {
var hwSlideSpeed = 2000;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
    $('.bottom-slide').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#bottom-slider .bottom-slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.bottom-slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++};
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.bottom-slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-bottom-slide.active").removeClass("active");
        $('.control-bottom-slide').eq(slideNum).addClass('active');
        }
if(hwNeedLinks){
    $('#nextbutton').click(function(){
        animSlide("next");
        return false;
        })
    $('#prewbutton').click(function(){
        animSlide("prew");
        return false;
        })
}
    var $adderSpan = '';
    $('.bottom-slide').each(function(index) {
            $adderSpan += '<span class = "control-bottom-slide">' + index + '</span>';
        });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('.bottom-slider-wrapper ');
    $(".control-bottom-slide:first").addClass("active");
    $('.control-bottom-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
            }
    $('.bottom-slider-wrapper ').hover(    
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});
})(jQuery);
// JavaScript Document