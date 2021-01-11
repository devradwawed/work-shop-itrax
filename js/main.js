$(document).ready(function () {
  //slider
  $('.headerSlider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //dropdown
  $(".dropdown").hover(function () {
    $(".dropdown-menu").slideToggle(500)
  })
  // navber
  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if(wScroll >= 100){
      $("nav").addClass("bgWidth");
    }else{
      $("nav").removeClass("bgWidth")
    }
  });
  $('.countdown').dsCountDown({
    endDate: new Date("august 24, 2021 23:59:00")
    });

    //search
    $("#search").click(function () {
      $(".form-group").slideToggle(400)
    })
    $(".close").click(function () {
      $(".form-group").slideUp(400)
    })


    //butUp
    $(window).scroll(function () {
      let wScroll = $(window).scrollTop();
      if( wScroll > 550){
        $(".butUp").fadeIn(400)
      }else{
        $(".butUp").fadeOut(400)
      }
    })
    $(".butUp").click(function () {
      $("html , body").animate({scrollTop : '0'} ,2000)
    })

    // loading
    $(".loading").fadeOut(1000 , function() {
      $("body").css({  overflow: 'auto'})
    })


    //
    $(".navbar .nav-link").click(function () {
      let aHref = $(this).attr("href")
      $("html , body").animate({scrollTop : $(aHref).offset().top -120} ,2000)
    })
});



