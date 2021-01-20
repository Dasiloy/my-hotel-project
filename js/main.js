$(document).ready(
  function(){
    $(window).scroll(
      function(){
       $('#navbar').toggleClass('scroll',$(this).scrollTop() > 30); 
      }
    );


  }
);