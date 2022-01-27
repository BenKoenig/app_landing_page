import anime from "animejs";
import {appears_cb} from "../helpers/scrollAnimation";

const imgs = document.querySelectorAll('.j-pImg');


for(const img of imgs ) {
	appears_cb(img, () => {
		anime({
			targets: img,
			opacity: 0,
			direction: 'reverse',
			easing: 'easeInCubic',
			delay: 200,
		});
	})
}
