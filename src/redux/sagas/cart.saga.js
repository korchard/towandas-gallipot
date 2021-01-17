import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
const XMLParser = require('react-xml-parser');

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

// GET ROUTE -- to get cart items
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
} // end getCart

// GET ROUTE -- to get number of items to display in navbar
function* getCartItems() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/cart/items', config);

    yield put({ type: 'SET_CART_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getCart

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
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getCart

function* getShipping() {
  const xml = new XMLParser().parseFromString(`<RateV4Request USERID="853TOWAN2209">
                                              <Revision>2</Revision>
                                              <Package ID="1ST">
                                              <Service>PRIORITY</Service>
                                              <ZipOrigination>55127</ZipOrigination>
                                              <ZipDestination>55407</ZipDestination>
                                              <Pounds>3</Pounds>
                                              <Ounces>2</Ounces>
                                              <Container>VARIABLE</Container>
                                              <Width>5</Width>
                                              <Length>7</Length>
                                              <Height>4</Height>
                                              </Package>
                                              </RateV4Request>`);

  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get((`https://secure.shippingapis.com/ShippingAPI.dllAPI=RateV4&amp&XML=${xml}`), config);

    yield put({ type: 'SET_SHIPPING', payload: response.data });
  } catch (error) {
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getCart

function* productSaga() {
  yield takeEvery('ADD_TO_CART', addToCart);
  yield takeEvery('GET_CART', getCart);
  yield takeEvery('GET_CART_ITEMS', getCartItems);
  yield takeEvery('GET_CART_TOTAL', getCartTotal);
  yield takeEvery('GET_SHIPPING', getShipping);
}

export default productSaga;
