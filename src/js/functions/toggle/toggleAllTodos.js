import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const toggleAllTodos = (todoArr) => {
  if (
    todoArr.every((todo) => todo.checked === false)
    || todoArr.every((todo) => todo.checked === true)
  ) {
    todoArr.forEach((todo) => {
      todo.checked = !todo.checked;
      setToLocalStorage(todoArr, 'todoList');
      filterCompletedTodos(todoArr);
      filterActiveTodos(todoArr);
    });
  } else {
    todoArr.forEach((todo) => {
      if (todo.checked === false) {
        todo.checked = true;
        setToLocalStorage(todoArr, 'todoList');
        filterCompletedTodos(todoArr);
        filterActiveTodos(todoArr);
      }
    });
  }
};

export default toggleAllTodos;
