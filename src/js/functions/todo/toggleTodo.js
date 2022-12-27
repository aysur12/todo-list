import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const toggleTodo = (id, todoArr) => {
  const todoItem = todoArr.find((todo) => todo.id === id);
  todoItem.checked = !todoItem.checked;

  setToLocalStorage(todoArr, 'todoList');
  filterCompletedTodos(todoArr);
  filterActiveTodos(todoArr);
};

export default toggleTodo;
