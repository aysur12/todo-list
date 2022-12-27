import setToLocalStorage from '../setToLocalStorage';
import filterCompletedTodos from '../filter/filterCompletedTodos';
import filterActiveTodos from '../filter/filterActiveTodos';

const addTodo = (todoText, todoArr) => {
  todoArr = JSON.parse(localStorage.getItem('todoList')) || [];

  const todo = {
    id: todoArr.length ? todoArr[todoArr.length - 1].id + 1 : 1,
    text: todoText,
    checked: false,
  };

  todoArr.push(todo);

  setToLocalStorage(todoArr, 'todoList');
  filterCompletedTodos(todoArr);
  filterActiveTodos(todoArr);
};

export default addTodo;
