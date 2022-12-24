import editTodo from '../../js/functions/todo/editTodo';
import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElements from '../../js/functions/display/displayElements';
import isFilterActiveButton from '../../js/functions/isButton/isFilterActiveButton';
import isFilterCompletedButton from '../../js/functions/isButton/isFilterCompletedButton';

const editCheckboxSpan = (event) => {
  let updatedText = '';
  updatedText = event.target.innerText.trim();
  if (event.target.classList.contains('js-list__checkbox-span')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    if (updatedText === '') {
      deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

      if (isFilterCompletedButton()) {
        displayElements(JSON.parse(localStorage.getItem('completedList')));
      } else if (isFilterActiveButton()) {
        displayElements(JSON.parse(localStorage.getItem('activeList')));
      } else {
        displayElements(JSON.parse(localStorage.getItem('todoList')));
      }
    } else {
      editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));

      if (isFilterCompletedButton()) {
        displayElements(JSON.parse(localStorage.getItem('completedList')));
      } else if (isFilterActiveButton()) {
        displayElements(JSON.parse(localStorage.getItem('activeList')));
      } else {
        displayElements(JSON.parse(localStorage.getItem('todoList')));
      }

      updatedText = '';
    }
  }
};

export default editCheckboxSpan;
