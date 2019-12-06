export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ENABLE':
    return {
      ...state,
      test: true,
    };
    case 'DISABLE':
    return {
      ...state,
      test: false
    };
    default:
    return state;
  }
};
