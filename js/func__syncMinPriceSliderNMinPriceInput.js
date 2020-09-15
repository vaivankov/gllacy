"use strict";

window.syncMinPriceSliderNMinPriceInput = function () {
	spanPriceMin.innerHTML = sliderPriceMin.value;
};

sliderPriceMin.addEventListener("input", syncMinPriceSliderNMinPriceInput);
