const defaultState = {
  inputValue: 'Write Something',
  list: ['Breakfast', 'Lunch', 'supper'],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'todo/changeInput':
      // let newState = JSON.parse(JSON.stringify(state));
      // newState.inputValue = action.value;
      // return newState;
      return { state, inputValue: action.value };

    default:
      return state;
  }
};
