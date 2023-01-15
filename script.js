$(window).on("load", function () {
    document.getElementById("content-wrapper").style.visibility = "hidden";
    setTimeout(function () {
        $('#loader').fadeOut(400);
        document.getElementById("content-wrapper").style.visibility = "visible";
    }, 1500);

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("DOMContentLoaded", function () {
    birthday = new Date("February 28, 2005");
    document.getElementById("age").innerHTML = calculateAge(birthday) + ' years old'
});
function calculateAge(birthday) {
    var diff_ms = Date.now() - birthday.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

$('#vbtn-radio1').on('click', function () {
    $('#first-experience').removeClass('d-none');
    $('#second-experience').addClass('d-none');
    $('#third-experience').addClass('d-none');
})
$('#vbtn-radio2').on('click', function () {
    $('#second-experience').removeClass('d-none');
    $('#first-experience').addClass('d-none');
    $('#third-experience').addClass('d-none');
})
$('#vbtn-radio3').on('click', function () {
    $('#third-experience').removeClass('d-none');
    $('#first-experience').addClass('d-none');
    $('#second-experience').addClass('d-none');
})

$('#email').on('click', function () {
    const sendMail = 'mailto:fathuralvan28@gmail.com';
    window.location = sendMail;
})

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("actived");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("actived");
        }
    });
}


