const productReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PRODUCT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default productReducer;
  