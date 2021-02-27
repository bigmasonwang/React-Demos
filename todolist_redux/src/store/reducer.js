import store from '.';

const defaultState = {
  inputValue: 'Write Something',
  list: ['Breakfast', 'Lunch', 'supper'],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'todo/changeInput': {
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    // return { ...state, inputValue: action.value };

    case 'todo/addItem': {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }

    default:
      return state;
  }
};
