$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('active');
  });

  $(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $("#navbar").css("background-color", "#555");
        } else {
          $("#navbar").css("background-color", "transparent");
        }
      });
    });
});
