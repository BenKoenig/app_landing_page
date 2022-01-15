import {appears_cb} from "../helpers/scrollAnimation";
import anime from "animejs";

const featureItems = document.querySelectorAll('.j-featureItem');
const featuresWrapper = document.querySelector('#features');



appears_cb(featuresWrapper, () => {
	anime({
		targets: featureItems,
		translateY: 80,
		opacity: 0,
		direction: 'reverse',
		easing: 'easeInCubic',
		delay: [anime.stagger(300, {from: 'last'})]
	});
})
