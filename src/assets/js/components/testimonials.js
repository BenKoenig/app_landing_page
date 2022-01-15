import anime from "animejs";

const testimonialWrapper = document.querySelector('#j-testimonial_wrapper');
const testimonialNextBtn = document.querySelector('#j-nextBtn');
const testimonialPrevBtn = document.querySelector('#j-prevBtn');
const itemsAmount = testimonialWrapper.querySelectorAll('.j-testimonial_item').length;
const md = window.matchMedia("(max-width: 960px)")


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
		if((i+2) > (itemsAmount / 3)) i = -1;
		i++;

	} else {
		if((i + 2) > itemsAmount) i = -1;

		i++;
	}

	/**
    - Moves testimonial wrapper an X amount to the right (aka goes to next page)
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
	if(document.body.clientWidth > 960) {
		if (i < 1) i = (itemsAmount / 3);
	} else {
		if (i < 1) i = itemsAmount - 1;
	}

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
