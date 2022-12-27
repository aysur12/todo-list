import editCheckboxSpan from '../functions/edit/editCheckboxSpan';

const handleCheckboxSpanKeydown = (event) => {
  const parentElem = event.currentTarget.closest('.js-list__item');
  const id = Number(parentElem.id);

  if (event.key === 'Enter') {
    editCheckboxSpan(event);
  } else if (event.key === 'Escape') {
    const todos = JSON.parse(localStorage.getItem('todoList'));
    const todoItem = todos.find((todo) => todo.id === id);

    event.currentTarget.innerHTML = todoItem.text;

    event.currentTarget.setAttribute('contenteditable', false);
  }
};

export default handleCheckboxSpanKeydown;
