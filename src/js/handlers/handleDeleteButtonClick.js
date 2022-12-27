import deleteTodo from '../functions/todo/deleteTodo';
import displayElementsWithFilter from '../functions/display/displayElementsWithFilter';

const handleDeleteButtonClick = (event) => {
  const parentElem = event.currentTarget.closest('.js-list__item');
  const id = Number(parentElem.id);

  deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

  displayElementsWithFilter();
};

export default handleDeleteButtonClick;
