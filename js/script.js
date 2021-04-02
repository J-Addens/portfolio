$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('active');
  });

  $(window).scroll(function(){
    if(this.scrollY >20){
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });
});
