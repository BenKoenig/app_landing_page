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
const testimonialNextBtn = document.querySelector('#j-nextBtn');
const testimonialPrevBtn = document.querySelector('#j-prevBtn');
const itemsAmount = testimonialWrapper.querySelectorAll('.j-testimonial_item').length;
const appPreview = document.querySelector('#j-preview');
const videoOverlay = document.querySelector('#j-overlay');
const overlayBlank = document.querySelector('#j-overlayBlank');
const closeOverlay = document.querySelector('#j-closeOverlay');



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


const scrollAnimateBg = anime({
  targets: slideBgItemLeft,
  translateY: '-200px',
  direction: 'reverse',
  easing: 'easeInCubic',
  delay: anime.stagger(1000),
  autoplay: false
});

scrollAnimateBg.seek(10)

window.onScroll = function (e) {
    scrollAnimateBg.seek(window.pageYoffset)
}



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
		if(lastY > 100) {
			nav.style.background = "#111723";

		} else {
			nav.style.background = "transparent";

		}
    }
    lastY = window.scrollY;
}

window.addEventListener('scroll', update_sticky_nav_position);
update_sticky_nav_position();



/**
Automatically Sets the width of testimonial section

https://www.w3schools.com/howto/howto_js_media_queries.asp
 */


let i = 0; // page counter

function testimonialSetup() {

    if (md.matches) { // If media query matches

        testimonialWrapper.style.width = `${itemsAmount}00%`;

        /**
        Resets left styling and page counter
         */
        testimonialWrapper.style.left = '0';
        i = 0;

    } else {
        testimonialWrapper.style.width = `${(itemsAmount / 3) * 100}%`;

        /**
        Resets left styling and page counter
         */
        testimonialWrapper.style.left = '0';
        i = 0;
    }
}

const md = window.matchMedia("(max-width: 960px)")
testimonialSetup(md) // Call listener function at run time
md.addListener(testimonialSetup) // Attach listener function on state changes



testimonialNextBtn.addEventListener('click', e => {
    e.preventDefault();

    /**
    - Checks if client width is over/under 960px
    - Sets a page limit
    - Mobile & Desktop have a different page limit as more items fit on desktop (less pages) than mobile
     */
    if(document.body.clientWidth > 960) {
        if((i+2) > (itemsAmount / 3)) return;
		i++;

    } else {
        if((i + 2) > itemsAmount) return;
        i++;
    }

    /**
    - Moves testimonilal wrapper an X amount to the right (aka goes to next page)
    - Animation
     */
    anime({
        targets: testimonialWrapper,
        left: `-${i}00%`,
        easing: 'easeInOutExpo',
        duration: 800
    });
});



testimonialPrevBtn.addEventListener('click', e => {
    e.preventDefault();

    /**
    Insures the left value isn't beneath 100% (if was less, not items would be displayed)
     */
    if(i < 1) return;
	i--;

    /**
    - Moves testimonilal wrapper an X amount to the right (aka goes to next page)
    - Animation
     */
    anime({
        targets: testimonialWrapper,
        left: `-${i}00%`,
        easing: 'easeInOutExpo',
        duration: 800
    });
});


/**
 * App Preview
 * */
appPreview.addEventListener("click", e => {
	e.preventDefault();
	document.querySelector('body').style.overflowY = "hidden";
	videoOverlay.classList.remove('hidden');
})

document.querySelector("#j-overlayVideo").addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
	e.preventDefault();
	e.stopPropagation();
	return false;
}

/**
 * Closes the overlay when the user clicks on close button or in an empty space
 */
[overlayBlank, closeOverlay].forEach(c => c.addEventListener('click',  e => {
	e.preventDefault();
	videoOverlay.classList.add('hidden');
	document.querySelector('body').style.overflowY = "auto";
}))



