const productReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PRODUCT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // product will be on the redux state at:
  // state.product
  export default productReducer;
  