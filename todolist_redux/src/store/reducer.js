import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: ['Breakfast', 'Lunch', 'supper'],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    // return { ...state, inputValue: action.value };

    case ADD_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }

    case DELETE_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    }

    default:
      return state;
  }
};
