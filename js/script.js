$(document).ready(function(){
  $('.sign_up button').click(function(){
    $('.form').slideToggle();
    $('.form_2').hide();
  });
  $('.sign_in button').click(function(){
    $('.form_2').slideToggle();
    $('.form').hide();
  });
});
