// jquery sticky header
$(document).ready(function() {

    // $(".slideD").slideUp(1000).slideDown(1000);
    $(window).scroll(function() {
        if ($(window).scrollTop() > 40) {
            // $('nav').fadeOut(2000);

            $("header").slideDown(2000).addClass("fixedH");
            $("a").addClass("padding");
            $("section.secondSect").addClass("onScroll");

        } else {

            $("header").removeClass("fixedH");
            $("a").removeClass("padding");
            $("section.secondSect").removeClass("onScroll");
        }
    });

    // setTimeout(loadThis, 7000);
});


// $(function loadThis() {
//     $("*").css({ "overflow": "hidden" });
//     $(".wrapper").css({ "display": "block" });
//     $(".modal").css({ "display": "block" });
// });


$(".newsletter").click(function() {
    $("*").css({ "overflow": "hidden" });
    $(".wrapper").css({ "display": "block" });
    $(".modal").css({ "display": "block" });
});

$(".close").click(function() {
    $("*").css({ "overflow": "visible" });
    $(".wrapper").css({ "display": "none" });
    $(".modal").css({ "display": "none" });
});






//toggle picture
document.querySelector(".togglePicture").addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("togglePicture")) {
        e.target.classList.add("showP");
        e.target.classList.remove("togglePicture");
        document.querySelector(".pics").style.display = "block";
        document.querySelector(".gridM").classList.add("responsiveGrid");
        document.querySelector(".pictureButton").style.backgroundColor = "red";

    } else {
        e.target.classList.remove("showP");
        e.target.classList.add("togglePicture");
        document.querySelector(".pics").style.display = "none";
        document.querySelector(".gridM").classList.remove("responsiveGrid");
        document.querySelector(".pictureButton").style.backgroundColor = "#fff";
    }
});

// modal






// quote generator
var text = [{
    quote: "A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
    author: "colin powell"
}, {
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "pele"
}, {
    quote: "Self-belief and hard work will always earn you success.",
    author: "virat Kohli"
}];

var current = 0;

anima();
//slide function
function anima() {

    document.querySelector(".slideD").textContent = text[current].quote;
    document.querySelector(".name").innerHTML = '<a ' + "href" + '=' + "http://www.google.com/" + '>' + text[current].author + "</a>";
    if (current < text.length - 1) {
        current++;
    } else {
        current = 0;
    }


    // list.onmouseout = logMouse;


    setTimeout(anima, 5000);



}






//typed js
var options = {
    strings: ["Am Hannah ^4000", "Also an aspiring senior web developer.", "Should I let you know again?", "Ok i will"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
};

var typed = new Typed(".element", options);
//end typed js










// particlesJS.load('particles-js', 'particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });