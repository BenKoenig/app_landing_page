import anime from "animejs";

const faq = document.querySelector("#j-faq");
const faqItems = faq.querySelectorAll(".j-faqItem");
const answers = document.querySelectorAll('.j-answer') //all answers

answers.forEach(answer => answer.classList.add("hidden")); // hide all answers by default


for (const faqItem of faqItems) {
	const questions = faqItem.querySelectorAll('.j-question');


	for (const question of questions) {
		question.addEventListener("click", e => {
			e.preventDefault();
			const answer = faqItem.querySelector(".j-answer") //answer inside this item

			/*answers.forEach(a => answer == a ? answer.classList.toggle("hidden"): a.classList.add("hidden"));*/

			for (const a of answers) {
				if (a === answer) {
					answer.classList.toggle("hidden");
					anime({
						targets: answer,
						translateY: '-100px',
						opacity: '0',
						direction: 'reverse',
						duration: 80,
						easing: 'linear'
					});

				} else {
					a.classList.add("hidden");

				}
			}

		})
	}

}
