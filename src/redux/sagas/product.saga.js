import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// POST ROUTE - to add a product to the items sold
function* addProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/admin', action.payload, config);
      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga POST', error);
    }
} // end addProduct

// GET ROUTE - to get the product list
function* getProduct() {
    try {
      const response = yield axios.get('api/product'); 
      yield put({ type: 'SET_PRODUCT', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in product saga GET', error);
    }
} // end getProduct

// GET ROUTE - for search items
function* getSearch(action) {
  try {
      const response = yield axios.get(`/api/product/search/${action.payload}`);
      yield put({ type: 'SET_SEARCH', payload: response.data })
      console.log('getSearch', response.data);
  } catch (error) {
    console.log('Bad news bears...error with product saga GET search', error);
  }
} // end getSearch

// DELETE ROUTE - to remove items for sale
function* deleteProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      
      console.log('deleting item', action.payload);
      yield axios.put(`api/admin/delete/${action.payload}`, config);
      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga DELETE', error);
    }
} // end deleteProduct

// PUT ROUTE - edits the existing products
function* editProduct (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      yield axios.put(`api/admin/${action.payload.id}`, action.payload, config);
      yield put({ type: 'GET_PRODUCT' });
    } catch (error) {
      console.log('Bad news bears...error in product saga PUT', error);
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
