const filterNotCheckedTodo = (todoArr) => {
  const filteredArr = todoArr.filter((todo) => todo.checked === false);
  return filteredArr.length;
};

export default filterNotCheckedTodo;
