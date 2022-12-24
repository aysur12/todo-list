import editTodo from '../../js/functions/todo/editTodo';
import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElements from '../../js/functions/display/displayElements';

const editCheckboxSpan = (event) => {
  let updatedText = '';
  updatedText = event.target.innerText.trim();
  if (event.target.classList.contains('js-list__checkbox-span')) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    if (updatedText === '') {
      deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));

      displayElements(JSON.parse(localStorage.getItem('todoList')));
    } else {
      editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));

      displayElements(JSON.parse(localStorage.getItem('todoList')));

      updatedText = '';
    }
  }
};

export default editCheckboxSpan;
