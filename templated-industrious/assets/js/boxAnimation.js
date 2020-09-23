var boxOpen = false;
var firstTimeAnimation = true;
window.onscroll = function() {animateBoxOnScroll()};

function animateBox(){
    gsap.to("#tampa",{yPercent:boxOpen ? 0 : -40,duration:1});
    gsap.to("#base",{yPercent:boxOpen ? 0 :40,duration:1});
    boxOpen = !boxOpen;
    firstTimeAnimation = false;
}
function isInViewport(){
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function animateBoxOnScroll(){
    console.log(isInViewPort(document.querySelector('.animacao')));
    if(firstTimeAnimation && isInViewPort(document.querySelector('.animacao'))){
        animateBox();
    }

}

function isInViewPort(el) {
    vWidth   = window.innerWidth || document.documentElement.clientWidth,
    vHeight  = window.innerHeight || document.documentElement.clientHeight,
    efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
    );
}