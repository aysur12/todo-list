import setToLocalStorage from '../setToLocalStorage';

const filterCompletedTodos = (todoArr) => {
  const completedTodoArr = todoArr.filter((todo) => todo.checked === true);

  setToLocalStorage(completedTodoArr, 'completedList');
};

export default filterCompletedTodos;
