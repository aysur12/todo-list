import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const deleteTodo = (id, todoArr) => {
  todoArr.forEach((todo, index) => {
    if (todo.id === id) {
      todoArr.splice(index, 1);

      setToLocalStorage(todoArr, 'todoList');
      filterCompletedTodos(todoArr);
      filterActiveTodos(todoArr);
    }
  });
};

export default deleteTodo;
