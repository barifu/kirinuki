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

$(function() {
    $.scrollify({
      section : ".box_j",
      scrollbars:"false",
      easing: "swing",
      scrollSpeed: 500,
    });
});  