import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// POST ROUTE
function* addToCart (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/cart', action.payload, config);
      yield put({ type: 'GET_CART' });
    } catch (error) {
      console.log('Bad news bears...error in cart saga post', error);
    }
} // end addToCart

// GET ROUTE -- to get cart items
function* getCart() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.get('api/cart', config);
  
      yield put({ type: 'SET_CART', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in cart saga get', error);
    }
} // end getCart

// GET ROUTE -- to get number of items to display in navbar
function* getCartItems() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/cart/items', config);

    yield put({ type: 'SET_CART_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getCart

// GET ROUTE -- to get total cost of products
function* getCartTotal() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/cart/total', config);

    yield put({ type: 'SET_CART_TOTAL', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getCart

function* productSaga() {
  yield takeEvery('ADD_TO_CART', addToCart);
  yield takeEvery('GET_CART', getCart);
  yield takeEvery('GET_CART_ITEMS', getCartItems);
  yield takeEvery('GET_CART_TOTAL', getCartTotal);
}

export default productSaga;
