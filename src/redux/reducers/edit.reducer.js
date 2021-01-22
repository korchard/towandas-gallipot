const editReducer = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_PRODUCT':
        return action.payload;
      default:
        return state;
    }
  }; 

// edit will be on the redux state at:
// state.edit
export default editReducer;