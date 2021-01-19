import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// POST ROUTE
function* sendOrder (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/order', action.payload, config);
      yield put({ type: 'SET_ORDER' });
    } catch (error) {
      console.log('Bad news bears...error in order saga post', error);
    }
} // end addOrder

function* orderSaga() {
  yield takeEvery('SEND_ORDER', sendOrder);
}

export default orderSaga;
