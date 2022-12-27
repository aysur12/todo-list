import addTodo from '../functions/todo/addTodo';
import displayElements from '../functions/display/displayElements';
import isFilterActiveButton from '../functions/isButton/isFilterActiveButton';
import isFilterCompletedButton from '../functions/isButton/isFilterCompletedButton';

const handleAddTodoItem = (event) => {
  const form = document.querySelector('.js-form');
  const formInput = document.querySelector('.js-form__input');
  const formText = formInput.value.trim();

  if (event.currentTarget === form) {
    event.preventDefault();
  }

  if (formText) {
    addTodo(formText, JSON.parse(localStorage.getItem('todoList')));

    if (isFilterCompletedButton()) {
      displayElements(JSON.parse(localStorage.getItem('completedList')));
    } else if (isFilterActiveButton()) {
      displayElements(JSON.parse(localStorage.getItem('activeList')));
    } else {
      displayElements(JSON.parse(localStorage.getItem('todoList')) || []);
    }
  }

  formInput.value = '';
};

export default handleAddTodoItem;
