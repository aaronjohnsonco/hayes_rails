// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/\
jQuery(function() {
  $('#navContact').click(function() {
    $('body').animate({scrollTop: $('#contact').offset().top}, 1500);
    return false;
  });
  $('#navClients').click(function() {
    $('body').animate({scrollTop: $('#clients').offset().top}, 1500);
    return false;
  });
  $('#navAbout').click(function() {
    $('body').animate({scrollTop: $('#about').offset().top}, 1500);
    return false;
  });
  $('#navHow').click(function() {
    $('body').animate({scrollTop: $('#how').offset().top}, 1500);
    return false;
  });
  $('#navBrand').click(function() {
    $('body').animate({scrollTop: $('#top').offset().top}, 1500);
    return false;
  });
  $('#learn').click(function() {
    $('body').animate({scrollTop: $('#how').offset().top}, 1500);
    return false;
  });
});
