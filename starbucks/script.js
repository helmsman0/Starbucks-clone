function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
};

const sr = ScrollReveal({
    distance: '50px',
    duration: 2550,
    reset: true
});

sr.reveal('.textBox h2',{delay:300});
sr.reveal('.textBox p',{delay:400, origin: 'left'});
sr.reveal('.imgBox img',{delay:510, origin: 'bottom'});