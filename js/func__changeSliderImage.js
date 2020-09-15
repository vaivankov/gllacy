"use strict";

window.changeSliderImage = function () {
	sliderImage.src = this.dataset.url;
	sliderImageCapture.innerHTML = this.dataset.desc;
	document.body.style.backgroundColor = this.dataset.color;
};

for (let i of sliderRadioAll) {
	i.addEventListener("click", changeSliderImage);
}
