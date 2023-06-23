$('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

// =================
	// Page transitions
	// =================

	if ($("body").hasClass("ex-transition")) {
		
		// Wait until the whole page is loaded.
		
			setTimeout(function(){
				HideLoad(); // call out animations.
			}, 1000);
		


		// Transitions In (when "ptr-overlay" slides in).
		// =================
		function RevealLoad() {
			var tl_transitIn = gsap.timeline({ defaults: { duration: 1.5, ease: Expo.easeInOut }});

				if ($("#page-transition").length) {
					 tl_transitIn.set("#page-transition", { autoAlpha: 1 });
					 tl_transitIn.to(".ptr-overlay", { autoAlpha: 1}, 0);
					 tl_transitIn.to(".ptr-preloader", { autoAlpha: 1,  }, 0.4);
				}}


		// Transitions Out (when "ptr-overlay" slides out)
		// ================
		function HideLoad() {
			var tl_transitOut = gsap.timeline();

				 if ($("#page-transition").length) {
					tl_transitOut.to(".ptr-preloader", { duration: 1.3, autoAlpha: 0, ease: Expo.easeInOut });
					tl_transitOut.to(".ptr-overlay", { duration: 1.5, autoAlpha: 0, ease: Expo.easeInOut }, 0.3);
				 }}


				   
    
         // On link click
		// ==============
		$("a")
    .not('[target="_blank"]') // omit from selection
    .not('[href^="#"]') // omit from selection
    .not('[href^="mailto"]') // omit from selection
    .not('[href^="tel"]') // omit from selection
    .not(".lg-trigger") // omit from selection
    .not(".tt-btn-disabled") // omit from selection
    .not("#artist-work") // omit from selection
	.not("#artist-pic") // omit from selection
	.not("#back-to-top-button") // omit from selection
    .not(".no-transition") // omit from selection
    .on('click', function(e) {
      e.preventDefault();

      setTimeout(function (url) {
        window.location = url
      }, 1500, this.href);
      
      RevealLoad(); // call in animations.
  })}


  var btn = $('#back-to-top-button');

  $(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });
  
  btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
  });



  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* If browser back button was used, flush cache */
window.onpageshow = function(event) {
	if (event.persisted) {
	  window.location.reload();
	}
  };

