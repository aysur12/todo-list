const isFilterAllButton = () => {
  const filterAllButton = document.querySelector(
    '.js-todo__footer-button_filter_all',
  );
  const storageBtnId = localStorage.getItem('button-id');
  return storageBtnId === filterAllButton.id;
};

export default isFilterAllButton;
