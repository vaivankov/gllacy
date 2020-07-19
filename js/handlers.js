'use strict';

for (let i of sliderRadioAll) {
  i.addEventListener("click", changeSliderImage)
}

feedbackBackground.addEventListener("click", () => { showModal.call(feedbackBackground, feedbackBackground) });
feedbackClose.addEventListener("click", () => { showModal.call(feedbackClose, feedbackClose) });
feedbackShow.addEventListener("click", () => { showModal.call(feedbackShow, feedbackShow) });

document.addEventListener("keydown", closeModal);
