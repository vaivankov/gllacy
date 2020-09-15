"use strict";

window.showModal = function (obj) {
	let win = obj.dataset.window;
	let modal = document.querySelector(win);
	modal.classList.toggle("show");
};

feedbackBackground.addEventListener("click", () => {
	showModal.call(feedbackBackground, feedbackBackground);
});
feedbackClose.addEventListener("click", () => {
	showModal.call(feedbackClose, feedbackClose);
});
feedbackShow.addEventListener("click", () => {
	showModal.call(feedbackShow, feedbackShow);
});
