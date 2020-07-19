'use strict';

(function () {
  window.showModal = function (obj) {
    let win = obj.dataset.window;
    let modal = document.querySelector(win);
    modal.classList.toggle('show');
  }
}
)();