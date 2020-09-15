"use strict";

window.syncSliderValues = function (evt) {
	let sliderThumb = this;
	let sliderWrapper = sliderThumb.closest(".filter__input-slider");
	let sliderTrack = sliderWrapper.querySelector(".slider-track");
	let sliderMinValue = +sliderPriceMin.value;
	let sliderMaxValue = +sliderPriceMax.value;

	if (sliderMinValue > sliderMaxValue) {
		sliderPriceMin.value = sliderMaxValue;
		syncMinPriceSliderNMinPriceInput();
	}
	if (sliderMaxValue < sliderMinValue) {
		sliderPriceMax.value = sliderMinValue;
		syncMaxPriceSliderNMaxPriceInput();
	}

	sliderTrack.style.setProperty(`--${sliderThumb.id}`, +sliderThumb.value);
};

sliderPriceMin.addEventListener("input", syncSliderValues);
sliderPriceMax.addEventListener("input", syncSliderValues);
