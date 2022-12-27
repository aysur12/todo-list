const handleCheckboxSpanDblclick = (event) => {
  event.currentTarget.setAttribute('contenteditable', true);
  event.currentTarget.focus();
};

export default handleCheckboxSpanDblclick;
