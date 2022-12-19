import setToLocalStorage from '../../js/functions/setToLocalStorage';

const handleClearCompletedButton = (todoArr) => {
  todoArr = todoArr.filter((todo) => todo.checked === false);

  setToLocalStorage(todoArr, 'todoList');

  localStorage.removeItem('completedList');
};

export default handleClearCompletedButton;
