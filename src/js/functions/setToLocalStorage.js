const setToLocalStorage = (todoArr, keyName) => {
  localStorage.setItem(keyName, JSON.stringify(todoArr));
};

export default setToLocalStorage;
