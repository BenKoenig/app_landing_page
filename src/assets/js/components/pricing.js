import anime from "animejs";
import {appears_cb} from "../helpers/scrollAnimation";

const pricingWrapper = document.querySelector('#j-pricing');
const pricingItem = document.querySelectorAll('.j-pricingItem');
const switchBtn = document.querySelector('#j-switchBtn');


appears_cb(pricingWrapper, () => {
	anime({
		targets: pricingItem,
		translateY: 80,
		direction: 'reverse',
		easing: 'easeInCubic',
		delay: 200,
	});
})

let yearlyPrices = false;
switchBtn.addEventListener('click', e => {
	e.preventDefault();
	const btn = e.target.nextElementSibling.nextElementSibling.children[0];
	const text = e.target.nextElementSibling;

	if(yearlyPrices === false) {

		yearlyPrices = true;
		anime({
			targets: btn,
			translateX: "100%",
			easing: 'easeInCubic',
			duration: 150,
		});
		text.innerHTML = "Display monthly subscriptions";
		document.querySelectorAll(".j-yearlyPrices").forEach(yr => yr.classList.remove("hidden"));
		document.querySelectorAll('.j-monthlyPrices').forEach(mo => mo.classList.add("hidden"));

	} else {
		yearlyPrices = false;
		anime({
			targets: btn,
			translateX: "0%",
			easing: 'easeInCubic',
			duration: 150,
		});

		text.innerHTML = "Display yearly subscriptions"
		document.querySelectorAll('.j-monthlyPrices').forEach(mo => mo.classList.remove("hidden"));
		document.querySelectorAll(".j-yearlyPrices").forEach(yr => yr.classList.add("hidden"));
	}


})
