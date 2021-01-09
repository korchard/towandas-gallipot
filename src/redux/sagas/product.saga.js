import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// POST ROUTE
function* addProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/admin', action.payload, config);
      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga post', error);
    }
}

// GET ROUTE
function* getProduct() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.get('api/admin', config);
  
      yield put({ type: 'SET_PRODUCT', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in product saga get', error);
    }
}

function* productSaga() {
  yield takeLatest('ADD_PRODUCT', addProduct);
  yield takeLatest('GET_PRODUCT', getProduct);
}

export default productSaga;
