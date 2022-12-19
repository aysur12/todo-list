import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElements from '../../js/functions/display/displayElements';
import isFilterCompletedButton from '../../js/functions/isButton/isFilterCompletedButton';
import isFilterActiveButton from '../../js/functions/isButton/isFilterActiveButton';

const handleDeleteButtonClick = (event) => {
  if (event.target.classList.contains('js-list__delete-button')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

    if (isFilterCompletedButton()) {
      displayElements(JSON.parse(localStorage.getItem('completedList')));
    } else if (isFilterActiveButton()) {
      displayElements(JSON.parse(localStorage.getItem('activeList')));
    } else {
      displayElements(JSON.parse(localStorage.getItem('todoList')));
    }
  }
};

export default handleDeleteButtonClick;
