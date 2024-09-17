// Page reload on back navigation
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};

// Toggle menu
document.querySelector('.toggle-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('open');
});

// Page transitions
if (document.body.classList.contains("ex-transition")) {
    // Wait until the whole page is loaded.
    setTimeout(function() {
        HideLoad(); // call out animations.
    }, 500);

    // Transitions In (when "ptr-overlay" slides in).
    function RevealLoad() {
        if (document.getElementById("page-transition")) {
            gsap.set("#page-transition", { autoAlpha: 1 });
            gsap.to(".ptr-overlay", { duration: 1.5, autoAlpha: 1, ease: "expo.inOut" });
            gsap.to(".ptr-preloader", { duration: 1.5, autoAlpha: 1, ease: "expo.inOut", delay: 0.4 });
        }
    }

    // Transitions Out (when "ptr-overlay" slides out)
    function HideLoad() {
        if (document.getElementById("page-transition")) {
            gsap.to(".ptr-preloader", { duration: 1.3, autoAlpha: 0, ease: "expo.inOut" });
            gsap.to(".ptr-overlay", { duration: 1.5, autoAlpha: 0, ease: "expo.inOut", delay: 0.3 });
        }
    }

    // On link click
    document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not(.lg-trigger):not(.tt-btn-disabled):not(#artist-work):not(#artist-pic):not(#back-to-top-button):not(.no-transition)').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            setTimeout(function(url) {
                window.location = url;
            }, 1500, this.href);

            RevealLoad(); // call in animations.
        });
    });
}

// Back to top button
var btn = document.getElementById('back-to-top-button');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

