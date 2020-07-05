$(function() {
    $('.hamburger').click(function() {
        $(".header div nav ul").animate({
            opacity: 1,
            height: "toggle"
        }, 300, function() {
            $(".header div nav ul").toggleClass("items") ;
        });
    });

    $('.li-option').click(function() {
        $('ul').css('display', 'none')
    })
}) ;


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = "0"
    }

    else{
        document.getElementById('header').style.top = "-90px"
    }

    prevScrollpos = currentScrollPos;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // slideIndex = 1 + 1 or -1 + 1 
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); // 
}

function showSlides(n) {
  var i;
  // get the divs
  var slides = document.getElementsByClassName("mySlides");

  // get the dots
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} //if n > 3, slideIndex = 1
  if (n < 1) {slideIndex = slides.length} //if n < 1, slideIndex = 3
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active";
}