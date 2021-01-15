import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// POST ROUTE
function* sendMessage (action) {
    try {
    //   const config = {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: true,
    //   };
  
      yield axios.post('api/contact', action.payload); // removed the config here
    } catch (error) {
      console.log('Bad news bears...error in product saga post', error);
    }
} // end addProduct

function* productSaga() {
  yield takeEvery('SEND_MESSAGE', sendMessage);
}

export default productSaga;
