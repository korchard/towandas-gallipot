import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// POST ROUTE - creates a new order
function* sendOrder (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.post('api/order', action.payload, config);
      yield put({ type: 'GET_ORDER', payload: response.data[0]?.id });
    } catch (error) {
      console.log('Bad news bears...error in order saga POST', error);
    }
} // end sendOrder

// GET ROUTE -- to get specific order id
function* getOrder(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get(`api/order/order/${action.payload}`, config);
    yield put({ type: 'SET_ORDER', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in order saga GET', error);
  }
} // end getOrder

// GET ROUTE -- to get previous order id and general order info
function* getPrevious() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/order/previous', config);
    yield put({ type: 'SET_ORDER', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in order saga GET', error);
  }
} // end getPrevious

// // GET ROUTE -- to get cart items in the previous orders
function* getPreviousItems(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    const response = yield axios.get(`api/order/things/${action.payload}`, config);
    yield put({ type: 'SET_PREVIOUS', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in order saga GET', error);
  }
} // end getPreviousItems

function* orderSaga() {
  yield takeEvery('SEND_ORDER', sendOrder);
  yield takeEvery('GET_ORDER', getOrder);
  yield takeEvery('GET_PREVIOUS_ORDERS', getPrevious);
  yield takeEvery('GET_PREVIOUS_ITEMS', getPreviousItems);
}

export default orderSaga;
