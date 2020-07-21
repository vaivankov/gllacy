'use strict';

(function () {
  window.syncSliderValues = function () {
    let sliderMinValue = +sliderPriceMin.value,
      sliderMaxValue = +sliderPriceMax.value;

    if (sliderMinValue > sliderMaxValue) {
      sliderPriceMin.value = sliderMaxValue;
      syncMinPriceSliderNMinPriceInput();
      return;
    }
    if (sliderMaxValue < sliderMinValue) {
      sliderPriceMax.value = sliderMinValue;
      syncMaxPriceSliderNMaxPriceInput();
      return;
    }
  }
})();

sliderPriceMin.addEventListener("input", syncSliderValues);
sliderPriceMax.addEventListener("input", syncSliderValues);