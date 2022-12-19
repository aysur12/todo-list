const isFilterActiveButton = () => {
  const filterActiveButton = document.querySelector(
    '.js-todo__footer-button_filter_active',
  );
  const storageBtnId = localStorage.getItem('button-id');
  return storageBtnId === filterActiveButton.id;
};

export default isFilterActiveButton;
