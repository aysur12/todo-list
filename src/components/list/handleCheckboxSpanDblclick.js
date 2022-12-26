const handleCheckboxSpanDblclick = (event) => {
  if (event.target.classList.contains('js-list__checkbox-span')) {
    event.target.setAttribute('contenteditable', true);
    event.target.focus();
  }
};

export default handleCheckboxSpanDblclick;
