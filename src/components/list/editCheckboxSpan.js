import editTodo from '../../js/functions/todo/editTodo';
import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

const editCheckboxSpan = (event) => {
  let updatedText = '';
  updatedText = event.target.innerText.trim();
  if (event.target.classList.contains('js-list__checkbox-span')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    if (updatedText === '') {
      deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

      displayElementsWithFilter();
    } else {
      editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));

      displayElementsWithFilter();

      updatedText = '';
    }
  }
};

export default editCheckboxSpan;
