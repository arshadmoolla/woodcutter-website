$(document).ready(function() {
    // jQuery nav toggle
    $('.burger').bind('click',function(event){
        $('.nav-bar').slideToggle();
    });
    $(window).resize(function(){
        if($(window).width() > 600) {
            $('.nav-bar').removeAttr('style');  
        }
    });
  });