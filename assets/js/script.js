//<!--=============== jquerydatepicker ===============-->

$(function () {
  $("#inputCheckIn").datepicker();


  $("#inputCheckOut").datepicker();


  //<!--=============== jqueryslider===============-->
  $('.travel-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });

  //<!--=============== jquerysVideo===============-->

  function videoToggle() {
    video = $('.travel-video').get(0)
    if (video.paused) {
      video.play();
      $('.video-control-play').hide();
      $('.video-control-pause').show();
    } else {
      video.pause();
      $('.video-control-play').show();
      $('.video-control-pause').hide();
    }
  }

  $('.video-control-play').click(function () {
    videoToggle();
  })
  $('.video-control-pause').click(function () {
    videoToggle();
  })

});


// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});
