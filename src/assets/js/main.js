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

