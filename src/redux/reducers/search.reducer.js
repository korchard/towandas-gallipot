const searchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COOKIE':
        return action.payload;
      case 'RESET_COOKIE':
        return state = [];
      default:
        return state;
    }
  }; 

export default searchReducer;