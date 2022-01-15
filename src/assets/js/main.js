import "./components/navbar";
import "./components/hero";
import "./components/testimonials";
import "./components/preview";
import "./components/stats";
import "./components/features";
import "./components/pricing";

// NO JS Fallbacks for css
document.body.classList.add("js")

// Environmental
if(process.env.NODE_ENV === 'development'){
	require("./devonly/dev");
}
