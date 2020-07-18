'use strict';

(function () {
  window.showModal = function () {
    let parent = searchButton.closest('.user-navigation__list-item');
    let modal = parent.querySelector('.modal');
    modal.classList.toggle('show');
  }
}
)();