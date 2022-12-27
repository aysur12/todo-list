const showElement = (todoArr, element, className) => {
  if (!todoArr.length) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};

export default showElement;
