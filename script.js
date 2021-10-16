// 両端の画像を小さくする
$(function(){
    $(window).scroll(function(){
      var obj = $('.girlR_img');
      scroll = $(window).scrollTop();
      if (scroll > 1) {
        obj.addClass('isSmall');
      } else{
        obj.removeClass('isSmall');
      }
    })
  });  

$(function(){
    $(window).scroll(function(){
      var obj = $('.girlL_img');
      scroll = $(window).scrollTop();
      if (scroll > 1) {
        obj.addClass('isSmall');
      } else{
        obj.removeClass('isSmall');
      }
    })
  });    

// セクションごとにスクロール  
$(function() {
    $.scrollify({
      section : ".box",
      scrollbars:"false",
      easing: "swing",
      scrollSpeed: 400,
    });
});    

// モーダルウィンドウ
$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 
});

