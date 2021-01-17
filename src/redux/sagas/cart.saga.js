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

// GET ROUTE
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
} // end getProduct

function* productSaga() {
  yield takeEvery('ADD_TO_CART', addToCart);
  yield takeEvery('GET_CART', getCart);
}

export default productSaga;
