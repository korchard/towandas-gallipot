import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

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

// DELETE ROUTE
function* deleteProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      yield axios.delete(`api/admin/${action.payload}`, config);

      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga delete', error);
    }
}

// PUT ROUTE
function* editProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      yield axios.put(`api/admin/${action.payload.id}`, action.payload, config);
      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga put', error);
    }
  }

function* productSaga() {
  yield takeEvery('ADD_PRODUCT', addProduct);
  yield takeEvery('GET_PRODUCT', getProduct);
  yield takeEvery('DELETE_PRODUCT', deleteProduct);
  yield takeEvery('EDIT_PRODUCT', editProduct);
}

export default productSaga;
