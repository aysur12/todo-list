const showElement = (todoArr, element, className) => {
  if (todoArr.length === 0) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};

export default showElement;
