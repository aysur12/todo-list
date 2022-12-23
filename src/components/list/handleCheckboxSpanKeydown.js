import editTodo from '../../js/functions/todo/editTodo';
import deleteTodo from '../../js/functions/todo/deleteTodo';
import displayElements from '../../js/functions/display/displayElements';

const handleCheckboxSpanKeydown = (event) => {
  const parentElem = event.target.closest('.js-list__item');
  const id = parseInt(parentElem.id, 10);

  if (event.key === 'Enter') {
    let updatedText = '';
    if (event.target.classList.contains('js-list__checkbox-span')) {
      updatedText = event.target.innerText.trim();
  
      if (updatedText === '') {
        deleteTodo(id, JSON.parse(localStorage.getItem('todoList')));
  
        displayElements(JSON.parse(localStorage.getItem('todoList')));
      } else {
        editTodo(id, updatedText, JSON.parse(localStorage.getItem('todoList')));
  
        displayElements(JSON.parse(localStorage.getItem('todoList')));
  
        updatedText = '';
      }
    }
  } else if (event.key === 'Escape') {  
    displayElements(JSON.parse(localStorage.getItem('todoList')));
  }  
  
};

export default handleCheckboxSpanKeydown;
