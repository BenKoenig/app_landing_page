const appPreview = document.querySelector('#j-preview');
const videoOverlay = document.querySelector('#j-overlay');
const overlayBlank = document.querySelector('#j-overlayBlank');
const closeOverlay = document.querySelector('#j-closeOverlay');

/**
 * App Preview
 * */
appPreview.addEventListener("click", e => {
	e.preventDefault();
	document.querySelector('body').style.overflowY = "hidden";
	videoOverlay.classList.remove('hidden');
})

document.querySelector("#j-overlayVideo").addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
	e.preventDefault();
	e.stopPropagation();
	return false;
}

/**
 * Closes the overlay when the user clicks on close button or in an empty space
 */
[overlayBlank, closeOverlay].forEach(c => c.addEventListener('click',  e => {
	e.preventDefault();
	videoOverlay.classList.add('hidden');
	document.querySelector('body').style.overflowY = "auto";
}))
