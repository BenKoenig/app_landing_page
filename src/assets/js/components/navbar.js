const mobileMenu = document.querySelector('#mobile-menu');
const mobileBtn = document.querySelector('#mobile-btn');
const nav = document.querySelector('#navbar');
const blank = document.querySelector("#j-nav-blank");
const mobileLinks = document.querySelectorAll('.j-mobile-link');

// hides mobile menu by default
mobileMenu.classList.add('hidden');

// mobile navigation toggler
mobileBtn.addEventListener('click', e => {
	mobileMenu.classList.toggle("hidden");
	blank.classList.toggle("hidden");
});

blank.addEventListener(('click'), e => {
	mobileMenu.classList.toggle("hidden");
	blank.classList.toggle("hidden");
})

for(const mobileLink of mobileLinks) {
	mobileLink.addEventListener('click', () =>{
		mobileMenu.classList.toggle("hidden");
		blank.classList.toggle("hidden");
	})
}


// sticky navigation
let lastY = window.scrollY;
const update_sticky_nav_position = e => {

	if (lastY > 100) {
		nav.style.background = "#111723";

	} else {
		nav.style.background = "transparent";

	}
	lastY = window.scrollY;
}

window.addEventListener('scroll', update_sticky_nav_position);

update_sticky_nav_position();
