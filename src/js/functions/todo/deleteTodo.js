import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const deleteTodo = (id, todoArr) => {
  todoArr = todoArr.filter((todo) => todo.id !== id);

  setToLocalStorage(todoArr, 'todoList');
  filterCompletedTodos(todoArr);
  filterActiveTodos(todoArr);
};

export default deleteTodo;
