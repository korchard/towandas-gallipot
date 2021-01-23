import { combineReducers } from 'redux';

const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      case 'RESET_CART':
        return state = [];
      default:
        return state;
    }
  }; 

const itemsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART_ITEMS':
        return action.payload;
      case 'RESET_CART_ITEMS':
        return state = [];
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

const shippingReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_SHIPPING':
        return action.payload;
      default:
        return state;
    }
  }; 

const paymentReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_PAYMENT_TOTAL':
        return action.payload;
      default:
        return state;
    }
  }; 

// cart will be on the redux state at:
// state.cart.cartReducer &
// state.cart.itemsReducer &
// state.cart.totalReducer &
// state.cart.shippingReducer &
// state.cart.paymentReducer
export default combineReducers({
  cartReducer,
  itemsReducer,
  totalReducer,
  shippingReducer,
  paymentReducer,
});