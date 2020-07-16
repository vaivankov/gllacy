'use strict';

(function () {
  window.changeSliderImage = function () {
    sliderImage.src = this.dataset.url;
    sliderImageCapture.innerHTML = this.dataset.desc;
  }
}
)();