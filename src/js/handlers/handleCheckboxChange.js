import toggleTodo from '../functions/todo/toggleTodo';
import displayElementsWithFilter from '../functions/display/displayElementsWithFilter';

const handleCheckboxChange = (event) => {
  const parentElem = event.currentTarget.closest('.js-list__item');
  const id = Number(parentElem.id);

  toggleTodo(id, JSON.parse(localStorage.getItem('todoList')));

  displayElementsWithFilter();
};

export default handleCheckboxChange;
