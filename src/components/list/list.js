import displayElements from '../../js/functions/display/displayElements';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

if (localStorage.getItem('todoList')) {
  displayElements(JSON.parse(localStorage.getItem('todoList')));
}

displayElementsWithFilter();
