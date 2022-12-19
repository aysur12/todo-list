import createElement from '../createElement';

const displayTodos = (todoArr) => {
  const list = document.querySelector('.js-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  todoArr.forEach((todo) => {
    const { id, text, checked } = todo;

    const listItemClasses = ['list__item', 'js-list__item'];
    const listItem = createElement('li', ...listItemClasses);
    listItem.id = id;

    const checkboxLabel = createElement('label', 'list__checkbox');

    const checkboxInputClasses = [
      'list__checkbox-input',
      'js-list__checkbox-input',
    ];
    const checkboxInput = createElement('input', ...checkboxInputClasses);
    checkboxInput.type = 'checkbox';
    checkboxInput.checked = checked;

    const checkboxSpanClasses = [
      'list__checkbox-span',
      'js-list__checkbox-span',
    ];
    const checkboxSpan = createElement('span', ...checkboxSpanClasses);
    checkboxSpan.contentEditable = true;

    if (checked) {
      checkboxSpan.classList.add('list__checkbox-span_checked');

      const strikethroughBlockClasses = [
        'list__strikethrough-block',
        'js-list__strikethrough-block',
      ];
      const strikethroughBlock = createElement(
        's',
        ...strikethroughBlockClasses,
      );
      strikethroughBlock.textContent = text;
      checkboxSpan.append(strikethroughBlock);
    } else {
      checkboxSpan.textContent = text;
    }

    const deleteBtnClasses = ['list__delete-button', 'js-list__delete-button'];
    const deleteBtn = createElement('button', ...deleteBtnClasses);

    list.append(listItem);
    listItem.append(checkboxLabel, checkboxSpan, deleteBtn);
    checkboxLabel.append(checkboxInput);
  });
};

export default displayTodos;
