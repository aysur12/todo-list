const filterNotCheckedTodo = (todoArr) => {
  const filteredArr = todoArr.filter((todo) => !todo.checked);
  return filteredArr.length;
};

export default filterNotCheckedTodo;
