import anime from "animejs";
import {appears_cb} from "../helpers/scrollAnimation";

const pricingWrapper = document.querySelector('#j-pricing');
const pricingItem = document.querySelectorAll('.j-pricingItem');

appears_cb(pricingWrapper, () => {
	anime({
		targets: pricingItem,
		translateY: 80,
		opacity: 0,
		direction: 'reverse',
		easing: 'easeInCubic',
		delay: [anime.stagger(200, {from: 'last'})]
	});
})
