import anime from "animejs";
import {appears_cb} from "../helpers/scrollAnimation";

const numbers = document.querySelectorAll('.j-animateNumbers');
const statsWrapper = document.querySelector('#j-stats')

const stats = {
	downloads: 0,
	reviews: 0,
	articles: 0
}

appears_cb(statsWrapper, () => {
	anime({
		targets: stats,
		/*Change numbers here*/
		downloads: 80000,
		reviews: 10000,
		articles: 1200,
		easing: 'linear',
		round: 1,
		update: function () {
			numbers[0].innerHTML = JSON.stringify(stats.downloads);
			numbers[1].innerHTML = JSON.stringify(stats.reviews);
			numbers[2].innerHTML = JSON.stringify(stats.articles);
		}
	});
});


