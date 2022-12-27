import setToLocalStorage from '../setToLocalStorage';

const filterCompletedTodos = (todoArr) => {
  const completedTodoArr = todoArr.filter((todo) => todo.checked);

  setToLocalStorage(completedTodoArr, 'completedList');
};

export default filterCompletedTodos;
