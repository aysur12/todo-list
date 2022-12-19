import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const editTodo = (id, updatedText, todoArr) => {
  todoArr.forEach((todo) => {
    if (todo.id === id) {
      todo.text = updatedText;
      setToLocalStorage(todoArr, 'todoList');
      filterCompletedTodos(todoArr);
      filterActiveTodos(todoArr);
    }
  });
};

export default editTodo;
