import toggleAllTodos from '../../js/functions/toggle/toggleAllTodos';
import displayElements from '../../js/functions/display/displayElements';
import isFilterCompletedButton from '../../js/functions/isButton/isFilterCompletedButton';
import isFilterActiveButton from '../../js/functions/isButton/isFilterActiveButton';

const handleDropdownButton = () => {
  toggleAllTodos(JSON.parse(localStorage.getItem('todoList')));

  if (isFilterCompletedButton()) {
    displayElements(JSON.parse(localStorage.getItem('completedList')));
  } else if (isFilterActiveButton()) {
    displayElements(JSON.parse(localStorage.getItem('activeList')));
  } else {
    displayElements(JSON.parse(localStorage.getItem('todoList')));
  }
};

export default handleDropdownButton;
