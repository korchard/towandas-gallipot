import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// POST ROUTE
function* sendOrder (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.post('api/order', action.payload, config);
      yield put({ type: 'GET_ORDER', payload: response.data[0]?.id });
      console.log('id response', response.data[0].id);
    } catch (error) {
      console.log('Bad news bears...error in order saga post', error);
    }
} // end addOrder

// GET ROUTE -- to get order id
function* getOrder(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    console.log('payload', action.payload);
    const response = yield axios.get(`api/order/${action.payload}`, config);
    // yield axios.post('/api/order', {...action.payload, id: response.data})
    yield put({ type: 'SET_ORDER', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in order saga get', error);
  }
} // end getCart

function* orderSaga() {
  yield takeEvery('SEND_ORDER', sendOrder);
  yield takeEvery('GET_ORDER', getOrder);
}

export default orderSaga;
