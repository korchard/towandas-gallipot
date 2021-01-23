import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// POST ROUTE - to add an item to the user's cart
function* addToCart(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/cart', action.payload, config);
      yield put({ type: 'GET_CART' });
      yield put({ type: 'GET_CART_ITEMS' });
      yield put({ type: 'GET_CART_TOTAL' });
    } catch (error) {
      console.log('Bad news bears...error in cart saga POST', error);
    }
} // end addToCart

// GET ROUTE -- to get cart items to display in cart page
function* getCart() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.get('api/cart', config);
      yield put({ type: 'SET_CART', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in cart saga GET', error);
    }
} // end getCart

// GET ROUTE -- to get number of cart items to display in navbar
function* getCartItems() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/cart/items', config);
    yield put({ type: 'SET_CART_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in cart saga GET', error);
  }
} // end getCartItems

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
    console.log('Bad news bears...error in cart saga GET', error);
  }
} // end getCartTotal

// DELETE ROUTE -- to remove cart item
function* deleteItem (action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    yield axios.delete(`api/cart/adjust/${action.payload}`, config);
    yield put({ type: 'GET_CART' });
    yield put({ type: 'GET_CART_ITEMS' });
    yield put({ type: 'GET_CART_TOTAL' });
  } catch (error) {
    console.log('Bad news bears...error in cart saga DELETE', error);
  }
} // end deleteItem

// PUT ROUTE - to increase thee quantity of a specific item in the cart
function* addItem (action) {
  console.log('action', action.payload);
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    yield axios.put(`api/cart/add/${action.payload}`, config);
    yield put({ type: 'GET_CART' });
    yield put({ type: 'GET_CART_ITEMS' });
    yield put({ type: 'GET_CART_TOTAL' });
  } catch (error) {
    console.log('Bad news bears...error in cart saga PUT', error);
  }
} // end addItem

// PUT ROUTE - to decrease the quantity of a specific item in the cart
function* subtractItem (action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    yield axios.put(`api/cart/subtract/${action.payload}`, config);
    yield put({ type: 'GET_CART' });
    yield put({ type: 'GET_CART_ITEMS' });
    yield put({ type: 'GET_CART_TOTAL' });
  } catch (error) {
    console.log('Bad news bears...error in cart saga PUT', error);
  }
} // end subtractItem

function* productSaga() {
  yield takeEvery('ADD_TO_CART', addToCart);
  yield takeEvery('GET_CART', getCart);
  yield takeEvery('GET_CART_ITEMS', getCartItems);
  yield takeEvery('GET_CART_TOTAL', getCartTotal);
  yield takeEvery('ADD_ITEM', addItem);
  yield takeEvery('SUBTRACT_ITEM', subtractItem);
  yield takeEvery('DELETE_ITEM', deleteItem);
}

export default productSaga;
