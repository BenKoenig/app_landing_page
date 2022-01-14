const mobileMenu = document.querySelector('#mobile-menu');
const mobileBtn = document.querySelector('#mobile-btn');
const nav = document.querySelector('#navbar');
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
