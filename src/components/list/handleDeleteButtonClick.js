import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

const handleDeleteButtonClick = (event) => {
  if (event.target.classList.contains('js-list__delete-button')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

    displayElementsWithFilter();
  }
};

export default handleDeleteButtonClick;
