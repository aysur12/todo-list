const handleCheckboxSpanDblclick = (event) => {
  if (event.target.classList.contains('js-list__checkbox-span')) {
    event.target.setAttribute('contenteditable', true);
  }
};

export default handleCheckboxSpanDblclick;
