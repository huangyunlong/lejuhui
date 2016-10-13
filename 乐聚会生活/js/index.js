/**
 * Created by Administrator on 2016/10/12.
 */

var tid;
$("section").hover(function(){
    $(".btn").fadeIn(200);
    clearInterval(tid);
},function(){
    $(".btn").fadeOut(200);
    yundong();
});
yundong();
var count=0;
$(".controls ul li").click(function(){
    var $v = $(this).index();
    count=$v;
    $(".lunbo ul").stop().animate({left:-1423*($v+1)},1000);
});

$(".btn_right").click(function(){
    count++;
    if(count>3){
        count=1;
        $(".lunbo ul").css({left:-1423});
    }
    $(".lunbo ul").stop().animate({left:-1423*(count+1)},1000);
});
$(".btn_left").click(function(){
    count--;
    if(count<1){
        count=3;
        $(".lunbo ul").css({left:-5691});
    }
    $(".lunbo ul").animate({left:-1423*count},1000);
});


function yundong(){tid =setInterval(function(){
    $(".btn_right").click();
},2000);}
