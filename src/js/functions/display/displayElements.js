import displayCount from './displayCount';
import displayTodos from './displayTodos';
import showElement from '../show/showElement';
import showClearCompletedButton from '../show/showClearCompletedButton';

const displayElements = (todoArr) => {
  const dropdownBtn = document.querySelector('.js-todo__dropdown-button');
  const footer = document.querySelector('.js-todo__footer');
  const clearCompletedBtn = document.querySelector(
    '.js-todo__footer-button_clear-completed',
  );

  if (todoArr) {
    displayTodos(todoArr);
    displayCount(JSON.parse(localStorage.getItem('todoList')) || []);
    showElement(
      JSON.parse(localStorage.getItem('todoList')) || [],
      dropdownBtn,
      'todo__dropdown-button_hidden',
    );
    showElement(
      JSON.parse(localStorage.getItem('todoList')) || [],
      footer,
      'todo__footer_hidden',
    );
    showClearCompletedButton(
      todoArr,
      clearCompletedBtn,
      'todo__footer-button_clear-completed_hidden',
    );
  }
};

export default displayElements;
