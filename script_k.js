$(function(){
    $(window).scroll(function (){
      $(".css-fade5").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
            $(this).addClass('active');
        } else {
            // $(this).removeClass('active');
        }
      });
    });
  });

// $('.css-fade5').each(function(){ //fadeInUpTriggerというクラス名が
//   　　var elemPos = $(this).offset().top; //要素より、50px上の
//   　　var scroll = $(window).scrollTop();
//   　　var windowHeight = $(window).height();
//   　　if (scroll >= elemPos - windowHeight){
//   　　$(this).addClass('active');
//   　　// 画面内に入ったらactiveというクラス名を追記
//   　　}else{
//   // 　　　$(this).removeClass('active');
//   　　// 画面外に出たらactiveというクラス名を外す
//   　　}
// });
// $(window).scroll(function (){
//   fade-in5();/* アニメーション用の関数を呼ぶ*/
// });
  

$(function() {
    $.scrollify({
      section : ".box_k",
      scrollbars:"false",
      easing: "swing",
      scrollSpeed: 800,
    });
});    
