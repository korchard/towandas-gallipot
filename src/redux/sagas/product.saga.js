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
} // end addProduct

// GET ROUTE
function* getProduct() {
    try {
      // const config = {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // };
  
      const response = yield axios.get('api/product'); // removed config from here
  
      yield put({ type: 'SET_PRODUCT', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in product saga get', error);
    }
} // end getProduct

// GET ROUTE - for search
function* getSearch(action) {
  console.log('search', action.payload );
  try {
      const response = yield axios.get(`/api/product/search/${action.payload}`);
      // sends search items to the reducer
      yield put({ type: 'SET_SEARCH', payload: response.data })
      console.log('getSearch', response.data);
  } catch (error) {
    console.log('Bad news bears...error with INDEX GET SEARCH', error);
  }
} // end getSearch

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
} // end deleteProduct

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
} // end editProduct

function* productSaga() {
  yield takeEvery('ADD_PRODUCT', addProduct);
  yield takeEvery('GET_PRODUCT', getProduct);
  yield takeEvery('DELETE_PRODUCT', deleteProduct);
  yield takeEvery('UPDATE_PRODUCT', editProduct);
  yield takeEvery('GET_SEARCH', getSearch);
}

export default productSaga;
