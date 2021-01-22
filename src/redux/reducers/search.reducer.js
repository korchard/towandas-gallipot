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

// search will be on the redux state at:
// state.search
export default searchReducer;