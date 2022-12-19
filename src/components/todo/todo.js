import handleDropdownButton from './handleDropdownButton';
import handleFilterButtonClick from './handleFilterButtonClick';
import handleClearCompletedButton from './handleClearCompletedButton';
import displayElements from '../../js/functions/display/displayElements';
import isFilterCompletedButton from '../../js/functions/isButton/isFilterCompletedButton';

const dropdownBtn = document.querySelector('.js-todo__dropdown-button');

dropdownBtn.addEventListener('click', handleDropdownButton);

const filterButtons = document.querySelectorAll(
  '.js-todo__footer-button_filter',
);
const storageBtnId = localStorage.getItem('button-id') || '1';

filterButtons.forEach((filterButton) => {
  handleFilterButtonClick(
    filterButton,
    filterButtons,
    'todo__footer-button_active',
  );

  if (storageBtnId === filterButton.id) {
    filterButton.classList.add('todo__footer-button_active');
  }
});

const filterAllButton = document.querySelector(
  '.js-todo__footer-button_filter_all',
);
filterAllButton.addEventListener('click', () => {
  displayElements(JSON.parse(localStorage.getItem('todoList')));
});

const filterActiveButton = document.querySelector(
  '.js-todo__footer-button_filter_active',
);
filterActiveButton.addEventListener('click', () => {
  displayElements(JSON.parse(localStorage.getItem('activeList')) || []);
});

const filterCompletedButton = document.querySelector(
  '.js-todo__footer-button_filter_completed',
);
filterCompletedButton.addEventListener('click', () => {
  displayElements(JSON.parse(localStorage.getItem('completedList')) || []);
});

const clearCompletedButton = document.querySelector(
  '.js-todo__footer-button_clear-completed',
);
clearCompletedButton.addEventListener('click', () => {
  handleClearCompletedButton(JSON.parse(localStorage.getItem('todoList')));

  if (isFilterCompletedButton()) {
    displayElements(JSON.parse(localStorage.getItem('completedList')) || []);
  } else {
    displayElements(JSON.parse(localStorage.getItem('todoList')));
  }
});
