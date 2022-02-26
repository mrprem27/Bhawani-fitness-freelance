// var bool = false;
var navLinks = document.querySelector('.nav-links');
var responsiveSlider = function () {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    // var ext = document.querySelector('#slider ul li img');

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
        if (this.innerWidth <= 850) {
            document.querySelector('.nav-links').style.transform = 'translateX(100%)';
            document.querySelector('#burger2').style.display = "block";
            document.querySelector('#burger').style.display = "block";
            document.querySelector('#burger').style.transform = `translateX(0)`;
            document.querySelector('#burger2').style.transform = `translateX(50px)`;
        }
        else {
            document.querySelector('#burger2').style.display = "none";
            document.querySelector('#burger').style.display = "none";
            document.querySelector('.nav-links').style.transform = 'translateX(0)';
        }
        document.querySelector('html').style.overflow = "scroll";
        slideList.style.left = "0px";
        count = 1;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 3000);

};

// window.onload = function () {
responsiveSlider();
// }

document.querySelector('#burger').addEventListener('click', (e) => {
    document.querySelector('html').style.overflow = "hidden";
    navLinks.style.transform = 'translateX(0)';
    e.target.style.transform = `translateX(50px)`;
    document.querySelector('#burger2').style.transform = `translateX(0)`
})

document.querySelector('#burger2').addEventListener('click', (e) => {
    navLinks.style.transform = 'translateX(100%)';
    document.querySelector('html').style.overflow = "scroll";
    e.target.style.transform = `translateX(50px)`;
    document.querySelector('#burger').style.transform = `translateX(0)`
})
