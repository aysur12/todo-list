import handleAddTodoItem from '../../js/handlers/handleAddTodoItem';

const form = document.querySelector('.js-form');

form.addEventListener('submit', handleAddTodoItem);
