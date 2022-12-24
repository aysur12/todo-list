import editCheckboxSpan from './editCheckboxSpan';

const handleCheckboxSpanKeydown = (event) => {
  const parentElem = event.target.closest('.js-list__item');
  const id = parseInt(parentElem.id, 10);

  if (event.key === 'Enter') {
    editCheckboxSpan(event);
  } else if (event.key === 'Escape') {
    event.preventDefault();

    const todos = JSON.parse(localStorage.getItem('todoList'));

    todos.forEach((todo) => {
      if (todo.id === id) {
        event.target.innerHTML = todo.text;
      }
    });
  }
};

export default handleCheckboxSpanKeydown;
