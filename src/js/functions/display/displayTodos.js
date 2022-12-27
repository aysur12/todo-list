import handleCheckboxChange from '../../handlers/handleCheckboxChange';
import handleCheckboxSpanDblclick from '../../handlers/handleCheckboxSpanDblclick';
import handleCheckboxSpanFocusout from '../../handlers/handleCheckboxSpanFocusout';
import handleCheckboxSpanKeydown from '../../handlers/handleCheckboxSpanKeydown';
import handleDeleteButtonClick from '../../handlers/handleDeleteButtonClick';
import createElement from '../createElement';

const displayTodos = (todoArr) => {
  const list = document.querySelector('.js-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  if (todoArr) {
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
      checkboxInput.addEventListener('change', handleCheckboxChange);

      const checkboxSpanClasses = [
        'list__checkbox-span',
        'js-list__checkbox-span',
      ];
      const checkboxSpan = createElement('span', ...checkboxSpanClasses);
      checkboxSpan.contentEditable = false;
      checkboxSpan.addEventListener('dblclick', handleCheckboxSpanDblclick);
      checkboxSpan.addEventListener('focusout', handleCheckboxSpanFocusout);
      checkboxSpan.addEventListener('keydown', handleCheckboxSpanKeydown);

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
        strikethroughBlock.textContent = text.trim();
        checkboxSpan.append(strikethroughBlock);
      } else {
        checkboxSpan.textContent = text.trim();
      }

      const deleteBtnClasses = [
        'list__delete-button',
        'js-list__delete-button',
      ];
      const deleteBtn = createElement('button', ...deleteBtnClasses);
      deleteBtn.addEventListener('click', handleDeleteButtonClick);

      list.append(listItem);
      listItem.append(checkboxLabel, checkboxSpan, deleteBtn);
      checkboxLabel.append(checkboxInput);
    });
  }
};

export default displayTodos;
