const isFilterCompletedButton = () => {
  const filterCompletedButton = document.querySelector(
    '.js-todo__footer-button_filter_completed',
  );
  const storageBtnId = localStorage.getItem('button-id');
  return storageBtnId === filterCompletedButton.id;
};

export default isFilterCompletedButton;
