import displayElements from '../../js/functions/display/displayElements';
import handleCheckboxChange from './handleCheckboxChange';
import handleDeleteButtonClick from './handleDeleteButtonClick';
import handleCheckboxSpanDblclick from './handleCheckboxSpanDblclick';
import handleCheckboxSpanFocusout from './handleCheckboxSpanFocusout';
import handleCheckboxSpanKeydown from './handleCheckboxSpanKeydown';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

if (localStorage.getItem('todoList')) {
  displayElements(JSON.parse(localStorage.getItem('todoList')));
}

displayElementsWithFilter();

const list = document.querySelector('.js-list');

list.addEventListener('change', handleCheckboxChange);

list.addEventListener('click', handleDeleteButtonClick);

list.addEventListener('dblclick', handleCheckboxSpanDblclick);

list.addEventListener('focusout', handleCheckboxSpanFocusout);

list.addEventListener('keydown', handleCheckboxSpanKeydown);
