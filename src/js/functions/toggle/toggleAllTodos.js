import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const toggleAllTodos = (todoArr) => {
  if (
    todoArr.every((todo) => !todo.checked)
    || todoArr.every((todo) => todo.checked)
  ) {
    todoArr.forEach((todo) => {
      todo.checked = !todo.checked;
    });
  } else {
    todoArr.forEach((todo) => {
      if (todo.checked === false) {
        todo.checked = true;
      }
    });
  }

  setToLocalStorage(todoArr, 'todoList');
  filterCompletedTodos(todoArr);
  filterActiveTodos(todoArr);
};

export default toggleAllTodos;
