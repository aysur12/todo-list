import editTodo from '../todo/editTodo';
import deleteTodo from '../todo/deleteTodo';
import displayElementsWithFilter from '../display/displayElementsWithFilter';

const editCheckboxSpan = (event) => {
  let updatedText = '';
  updatedText = event.currentTarget.innerText.trim();

  const parentElem = event.currentTarget.closest('.js-list__item');
  const id = Number(parentElem.id);

  if (!updatedText) {
    deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));
  } else {
    editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));

    updatedText = '';
  }

  displayElementsWithFilter();
};

export default editCheckboxSpan;
