import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
const XMLParser = require('react-xml-parser');

function* getShipping() {
//   const xml = new XMLParser().parseFromString(`<RateV4Request USERID="853TOWAN2209">
//                                                 <Revision>2</Revision>
//                                                 <Package ID="1ST">
//                                                 <Service>PRIORITY</Service>
//                                                 <ZipOrigination>55127</ZipOrigination>
//                                                 <ZipDestination>55407</ZipDestination>
//                                                 <Pounds>3</Pounds>
//                                                 <Ounces>2</Ounces>
//                                                 <Container>VARIABLE</Container>
//                                                 <Width>5</Width>
//                                                 <Length>7</Length>
//                                                 <Height>4</Height>
//                                                 </Package>
//                                                 </RateV4Request>`);

//   console.log('xml', xml);
//   console.log('xml', xml.name);
//   console.log('xml', xml.attributes);
//   console.log('xml', xml.children);

const xml = new XMLParser().parseFromString(`<CityStateLookupRequest USERID="xxxxxxx"><ZipCode ID="5">
<Zip5>20770</Zip5></ZipCode></CityStateLookupRequest>`);

  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get((`http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup
    &XML=${xml}`), config);

    yield put({ type: 'SET_SHIPPING', payload: response.data });
    console.log('response', response.data);
  } catch (error) {
    console.log('Bad news bears...error in cart saga get', error);
  }
} // end getShipping

function* shippingSaga() {
  yield takeEvery('GET_SHIPPING', getShipping);
}

export default shippingSaga;