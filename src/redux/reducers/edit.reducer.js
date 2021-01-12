const editReducer = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_PRODUCT':
        return action.payload;
      default:
        return state;
    }
  }; 

export default editReducer;