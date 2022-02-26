var bool = false;
var navLinks = document.querySelector('.nav-links');
window.addEventListener('resize', function () {
    bool = false;
    if (this.innerWidth <= 850) {
        document.querySelector('.nav-links').style.transform = 'translateX(100%)';
    }
    else {
        document.querySelector('.nav-links').style.transform = 'translateX(0)';
    }
    document.querySelector('#burger2').style.display = "none";
    document.querySelector('#burger').style.display = "block";
});
document.querySelector('#burger').addEventListener('click', (e) => {
    if (!bool) {
        document.querySelector('html').style.overflow = "hidden";
        navLinks.style.transform = 'translateX(0)';
        document.querySelector('#burger2').style.display = "none";
        document.querySelector('#burger').style.display = "block";
        bool = true;
    } else {
        navLinks.style.transform = 'translateX(100%)';
        document.querySelector('html').style.overflow = "scroll";
        document.querySelector('#burger2').style.display = "none";
        document.querySelector('#burger').style.display = "block";
        bool = false;
    }
})