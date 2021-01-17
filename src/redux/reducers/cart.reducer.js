import { combineReducers } from 'redux';

const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      default:
        return state;
    }
  }; 

const itemsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART_ITEMS':
        return action.payload;
      default:
        return state;
    }
  }; 

const totalReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART_TOTAL':
        return action.payload;
      default:
        return state;
    }
  }; 

const shippingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHIPPING':
        return action.payload;
      default:
        return state;
    }
  }; 


export default combineReducers({
  cartReducer,
  itemsReducer,
  totalReducer,
  shippingReducer,
});