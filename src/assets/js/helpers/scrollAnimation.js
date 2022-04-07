export const appears_cb = function(elm, cb){
	const onscroll = () => {
		if(elm.getBoundingClientRect().y - window.innerHeight < 0) {
			document.removeEventListener("scroll", onscroll);
			cb();
		}
	};
	document.addEventListener("scroll", onscroll);
};







