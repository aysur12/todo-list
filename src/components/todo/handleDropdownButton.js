import toggleAllTodos from '../../js/functions/toggle/toggleAllTodos';
import displayElementsWithFilter from '../../js/functions/display/displayElementsWithFilter';

const handleDropdownButton = () => {
  toggleAllTodos(JSON.parse(localStorage.getItem('todoList')));

  displayElementsWithFilter();
};

export default handleDropdownButton;
