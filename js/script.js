$(document).ready(function(){
  $('.sign_up button , .menu_signUp').click(function(){
    $('.form').slideToggle();
    $('.form_2').hide();
    $('#play, #pause, #next, #prev').slideToggle();
  });

  $('.sign_in button , .menu_signIn').click(function(){
    $('.form_2').slideToggle();
    $('.form').hide();
    $('#play, #pause, #next, #prev').slideToggle();
  });
  $('.sign_up button, .menu_signUp,.sign_in button, .menu_signIn').click(function(){

  });
// name
$('#name').keydown(function(){
  length = $('#name').val().length;
  if(length == 0 || length > 3){
    $('.us_name_span').addClass('nothing');
    $('.us_name_span').removeClass('weak');
    $('.us_name_span').text('');
  }
  if(length <= 3){
    $('.us_name_span').addClass('weak');
    $('.us_name_span').removeClass('nothing');
    $('.us_name_span').text('@ name Should be more then 2 letter');
  }

});





// slider js

 $('.slider').cycle({
  fx:'zoom',
  next: '#next',
  prev:'#prev',
  pager:'#pager'
});
$('#play').click(function(){
  $('.slider').cycle('resume');
});
$('#pause').click(function(){
  $('.slider').cycle('pause');
});
$('#content').hover(function(){
  $('.#play, #next , #prev , #pause').toggle();
});

});
// slider part finish here
