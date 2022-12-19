import handleAddTodoItem from '../../js/handlers/handleAddTodoItem';

const todoContainer = document.querySelector('.js-todo-container');
const formInput = document.querySelector('.js-form__input');

todoContainer.addEventListener('click', (event) => {
  const click = event.composedPath().includes(formInput);

  if (!click) {
    handleAddTodoItem(event);
  }
});
