$(document).ready(
  function(){
    $(window).scroll(
      function(){
       $('#navbar').toggleClass('scroll',$(this).scrollTop() > 90); 
      }
    );
  }
);

function validateSubscriberEmail() {
  var em = document.forms["emailSubs"]["subsEmail"].value;
  if (em == "") {
    alert("Email field must be filled out!");
    return false;
  } else {
    alert("Subscribed successfully!");
  };
}

function submitContactForm() {
  if (document.forms["contactForm"]["contactFormName"].value == "") {
	  alert("Name field must be filled out!");
  }

  if (document.forms["contactForm"]["contactFormEmail"].value == "") {
      alert("Email field must be filled out!");
  }
  
  if (document.forms["contactForm"]["contactFormBody"].value == "") {
      alert("Response cannot be empty!");
  }
}