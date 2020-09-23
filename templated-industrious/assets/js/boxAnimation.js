var boxOpen = false;
var firstTimeAnimation = true;
window.onscroll = function() {animateBoxOnScroll()};
function animateBox(){
    gsap.to("#tampa",{yPercent:boxOpen ? 0 : -40,duration:1});
    gsap.to("#base",{yPercent:boxOpen ? 0 :40,duration:1});
    boxOpen = !boxOpen;
}

function animateBoxOnScroll(){
    if(!boxOpen && document.querySelector('.animacao').getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight)){
        animateBox();
    }

}