import { combineReducers } from 'redux';

const orderReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ORDER':
        return action.payload;
      default:
        return state;
    }
  }; 

const previousReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREVIOUS':
        return [...state, action.payload];
      default:
        return state;
    }
  }; 

  export default combineReducers({
    orderReducer,
    previousReducer,
  });