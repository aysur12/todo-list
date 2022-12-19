const showClearCompletedButton = (todoArr, element, className) => {
  if (todoArr.some((todo) => todo.checked === true)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

export default showClearCompletedButton;
