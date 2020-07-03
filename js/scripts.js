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
