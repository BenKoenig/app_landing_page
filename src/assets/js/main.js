import anime from "animejs";

// NO JS Fallbacks for css
document.body.classList.add("js")

// Environmental
if(process.env.NODE_ENV === 'development'){
	require("./devonly/dev");
}



const mobileMenu = document.querySelector('#mobile-menu');
const mobileBtn = document.querySelector('#mobile-btn');
const nav = document.querySelector('#navbar');
const slideBgItemLeft = document.querySelectorAll('.j-slide_bg_item_l');
const slideBgItemRight = document.querySelectorAll('.j-slide_bg_item_r');
const testimonialWrapper = document.querySelector('#j-testimonial_wrapper');


// background animation when the website loads
anime({
  targets: slideBgItemRight,
  translateX: '200px',

  direction: 'reverse',
  easing: 'easeInCubic',
  delay: anime.stagger(1000)
});

anime({
    targets: slideBgItemLeft,
    translateX: '-200px',

    direction: 'reverse',
    easing: 'easeInCubic',
    delay: anime.stagger(1000)
  });



// hides mobile menu by default
mobileMenu.classList.add('hidden');

// mobile navigation toggler
mobileBtn.addEventListener('click', e => {
    mobileMenu.classList.toggle("hidden");
});


// sticky navigation 
let lastY = window.scrollY;
const update_sticky_nav_position = e => {

    if(lastY < window.scrollY) {
        nav.classList.add('-translate-y-[100px]');
    } else {
        nav.classList.remove('-translate-y-[100px]');
        
    }
    lastY = window.scrollY;
}

window.addEventListener('scroll', update_sticky_nav_position);
update_sticky_nav_position();



/**
Automatically Sets the width of testimonial section

https://www.w3schools.com/howto/howto_js_media_queries.asp
 */

function testimonialSetup(x) {
    const itemsAmount = testimonialWrapper.querySelectorAll('.j-testimonial_item').length;
            testimonialWrapper.style.width = `width: ${itemsAmount}00%`;
    if (x.matches) { // If media query matches
        testimonialWrapper.style.width = `${itemsAmount}00%`;
        testimonialWrapper.style.left = '0';
    } else {
        testimonialWrapper.style.width = `${(itemsAmount / 3) * 100}%`;
        testimonialWrapper.style.left = '0';
    }
}

const x = window.matchMedia("(max-width: 960px)")
testimonialSetup(x) // Call listener function at run time
x.addListener(testimonialSetup) // Attach listener function on state changes











