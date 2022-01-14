import anime from "animejs";
import "./components/navbar";
import "./components/hero";
import "./components/testimonials";
import "./components/preview";

// NO JS Fallbacks for css
document.body.classList.add("js")

// Environmental
if(process.env.NODE_ENV === 'development'){
	require("./devonly/dev");
}
