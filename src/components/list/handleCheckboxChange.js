import toggleTodo from '../../js/functions/todo/toggleTodo';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

const handleCheckboxChange = (event) => {
  if (event.target.classList.contains('js-list__checkbox-input')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    toggleTodo(id, JSON.parse(localStorage.getItem('todoList')));

    displayElementsWithFilter();
  }
};

export default handleCheckboxChange;
