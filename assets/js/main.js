(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  $(document).ready(function(){

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#main-menu', offset: 100});
    let scroll_link = $('.scroll');
    scroll_link.click(function(e){
        e.preventDefault();
        let url = $('body').find($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: url }, 700);
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        return false;
    });

    // mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

    // counter
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }
  });
})(jQuery);
