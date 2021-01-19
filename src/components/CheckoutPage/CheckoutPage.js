import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CheckoutPage extends Component {
  state = {
    checkout: false
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CheckoutPage);
