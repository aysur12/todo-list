import setToLocalStorage from '../setToLocalStorage';

const filterActiveTodos = (todoArr) => {
  const activeTodoArr = todoArr.filter((todo) => !todo.checked);

  setToLocalStorage(activeTodoArr, 'activeList');
};

export default filterActiveTodos;
