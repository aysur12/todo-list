import displayElements from '../../js/functions/display/displayElements';
import handleCheckboxChange from './handleCheckboxChange';
import handleDeleteButtonClick from './handleDeleteButtonClick';
import handleCheckboxSpanDblclick from './handleCheckboxSpanDblclick';
import handleCheckboxSpanFocusout from './handleCheckboxSpanFocusout';
import handleCheckboxSpanKeydown from './handleCheckboxSpanKeydown';
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

list.addEventListener('change', handleCheckboxChange);

list.addEventListener('click', handleDeleteButtonClick);

list.addEventListener('dblclick', handleCheckboxSpanDblclick);

list.addEventListener('focusout', handleCheckboxSpanFocusout);

list.addEventListener('keydown', handleCheckboxSpanKeydown);
