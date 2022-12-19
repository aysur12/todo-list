const handleFilterButtonClick = (button, buttons, className) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove(className);
    });
    button.classList.add(className);
    localStorage.setItem('button-id', button.id);
  });
};

export default handleFilterButtonClick;
