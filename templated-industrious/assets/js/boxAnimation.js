var boxOpen = false;
var firstTimeAnimation = true;
window.onscroll = function() {animateBoxOnScroll()};
function animateBox(){
    gsap.to("#tampa",{yPercent:boxOpen ? 0 : -40,duration:1});
    gsap.to("#base",{yPercent:boxOpen ? 0 :40,duration:1});
    boxOpen = !boxOpen;
    firstTimeAnimation = false;
}

function animateBoxOnScroll(){
    if(firstTimeAnimation){
        animateBox();
    }
}