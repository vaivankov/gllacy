"use strict";

window.syncMaxPriceSliderNMaxPriceInput = function () {
	spanPriceMax.innerHTML = sliderPriceMax.value;
};

sliderPriceMax.addEventListener("input", syncMaxPriceSliderNMaxPriceInput);
