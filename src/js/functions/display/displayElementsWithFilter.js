import isFilterActiveButton from '../isButton/isFilterActiveButton';
import isFilterCompletedButton from '../isButton/isFilterCompletedButton';
import displayElements from './displayElements';

const displayElementsWithFilter = () => {
  if (isFilterCompletedButton()) {
    displayElements(JSON.parse(localStorage.getItem('completedList')));
  } else if (isFilterActiveButton()) {
    displayElements(JSON.parse(localStorage.getItem('activeList')));
  } else {
    displayElements(JSON.parse(localStorage.getItem('todoList')));
  }
};

export default displayElementsWithFilter;
