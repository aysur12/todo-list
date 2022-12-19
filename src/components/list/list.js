import displayElements from '../../js/functions/display/displayElements';
import handleCheckboxClick from './handleCheckboxClick';
import handleDeleteButtonClick from './handleDeleteButtonClick';
import handleCheckboxSpanClick from './handleCheckboxSpanClick';
import isFilterActiveButton from '../../js/functions/isButton/isFilterActiveButton';
import isFilterCompletedButton from '../../js/functions/isButton/isFilterCompletedButton';

if (localStorage.getItem('todoList')) {
  displayElements(JSON.parse(localStorage.getItem('todoList')));
}

if (isFilterCompletedButton()) {
  displayElements(JSON.parse(localStorage.getItem('completedList')) || []);
} else if (isFilterActiveButton()) {
  displayElements(JSON.parse(localStorage.getItem('activeList')));
} else {
  displayElements(JSON.parse(localStorage.getItem('todoList')) || []);
}

const list = document.querySelector('.js-list');

list.addEventListener('change', handleCheckboxClick);

list.addEventListener('click', handleDeleteButtonClick);

list.addEventListener('focusout', handleCheckboxSpanClick);
