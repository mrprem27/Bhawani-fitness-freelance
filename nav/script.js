var navLinks = document.querySelector('.nav-links');
window.addEventListener('resize', function () {
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
    setTimeout(() => {
        document.querySelector('#burger').style.transform = `translateX(0)`;
    }, 400)
});
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
