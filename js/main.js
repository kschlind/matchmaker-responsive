$(function() {
  // Handler for .ready() called.

  $( window ).resize(function() {
    if ($( window ).width() >= 1200) {
      $('header.clearfix').show();
      $('.header-mobile').hide();
    } else {
      $('.header-mobile').show();
      $('header.clearfix').hide();
    }
  });

  $('.burger').click(function() {
    $('.dropdown').slideToggle();
  });
  
});