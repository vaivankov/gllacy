'use strict';

(function () {
  window.changeSliderImage = function () {
    sliderImage.src = this.dataset.url;
    sliderImageCapture.innerHTML = this.dataset.desc;
  }
}
)();

for (let i of sliderRadioAll) {
  i.addEventListener("click", changeSliderImage)
}