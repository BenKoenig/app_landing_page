import anime from "animejs";

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
