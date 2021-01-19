import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CheckoutPage extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'RESET_CART' });
    this.props.dispatch({ type: 'RESET_CART_ITEMS' });
    this.props.dispatch({ type: 'RESET_CART_TOTAL' });
    }

  render() {
    return (
      <div>
        <h2>Hi, I am checkout!</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CheckoutPage);
