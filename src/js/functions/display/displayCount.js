import filterNotCheckedTodo from '../filter/filterNotCheckedTodo';

const displayCount = (todoArr) => {
  const todoCountValue = document.querySelector('.js-todo__count-value');
  todoCountValue.innerHTML = filterNotCheckedTodo(todoArr);

  const todoCountText = document.querySelector('.js-todo__count-text');
  todoCountText.innerHTML = filterNotCheckedTodo(todoArr) > 1 ? 'items' : 'item';
};

export default displayCount;
