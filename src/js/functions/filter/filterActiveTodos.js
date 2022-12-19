import setToLocalStorage from '../setToLocalStorage';

const filterActiveTodos = (todoArr) => {
  const activeTodoArr = todoArr.filter((todo) => todo.checked === false);

  setToLocalStorage(activeTodoArr, 'activeList');
};

export default filterActiveTodos;
