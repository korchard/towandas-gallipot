const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      default:
        return state;
    }
  }; 

// const cartReducer = (state = [], action) => {
//    if (state === null) {
//      return state;
//    } else if (action.type === 'SET_CART') {
//      return [...state, action.payload];
//    }
//    return state;
// }; 

export default cartReducer;