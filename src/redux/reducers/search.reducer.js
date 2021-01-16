const searchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COOKIE':
        return action.payload;
      default:
        return state;
    }
  }; 

export default searchReducer;