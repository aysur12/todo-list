import editTodo from '../../js/functions/todo/editTodo';

const handleCheckboxSpanClick = (event) => {
  let updatedText = '';
  if (event.target.classList.contains('js-list__checkbox-span')) {
    updatedText = event.target.innerText;
  }

  if (updatedText) {
    const parentElem = event.target.closest('.js-list__item');
    const id = parseInt(parentElem.id, 10);

    editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));

    updatedText = '';
  }
};

export default handleCheckboxSpanClick;
