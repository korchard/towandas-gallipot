import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ProductsList extends Component {
  state = {
    heading: 'Product List',
  };

  componentDidMount = () => {
      this.props.dispatch({ type: 'GET_PRODUCTS' }); 
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProductsList);
