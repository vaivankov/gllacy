'use strict';

(function () {
  window.syncMinPriceSliderNMinPriceInput = function () {
    spanPriceMin.innerHTML = sliderPriceMin.value;
  }
})();

sliderPriceMin.addEventListener("input", syncMinPriceSliderNMinPriceInput);