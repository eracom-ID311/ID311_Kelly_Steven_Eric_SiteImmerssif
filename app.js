let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");




var scrolled;



window.addEventListener('scroll', function() {

    var value = window.scrollY;
    scrolled = window.pageYOffset;
    console.log(scrolled);


    if (scrolled >= 100) {
        button1.style.display = 'block';
        button1.style.display = 'flex';
    }
    if (scrolled >= 1000) {
        button2.style.display = 'block';
        button2.style.display = 'flex';
    }
    if (scrolled >= 1300) {
        button3.style.display = 'block';
        button3.style.display = 'flex';
    }
    if (scrolled >= 1600) {
        button4.style.display = 'block';
        button4.style.display = 'flex';
    }
    if (scrolled >= 1700) {
        button5.style.display = 'block';
        button5.style.display = 'flex';
    }
    if (scrolled >= 1800) {
        button6.style.display = 'block';
        button6.style.display = 'flex';
    }
    if (scrolled >= 1900) {
        button7.style.display = 'block';
        button7.style.display = 'flex';
    }
    if (scrolled >= 2000) {
        button8.style.display = 'block';
        button8.style.display = 'flex';
    }
    if (scrolled >= 2200) {
        button9.style.display = 'block';
        button9.style.display = 'flex';
    }
    if (scrolled >= 2450) {
        button10.style.display = 'block';
        button10.style.display = 'flex';
    }
    if (scrolled >= 2500) {
        button11.style.display = 'block';
        button11.style.display = 'flex';
    }

});