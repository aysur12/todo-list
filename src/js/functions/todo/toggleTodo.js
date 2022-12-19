import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const toggleTodo = (id, todoArr) => {
  todoArr.forEach((todo) => {
    if (todo.id === id) {
      todo.checked = !todo.checked;
      setToLocalStorage(todoArr, 'todoList');
      filterCompletedTodos(todoArr);
      filterActiveTodos(todoArr);
    }
  });
};

export default toggleTodo;
