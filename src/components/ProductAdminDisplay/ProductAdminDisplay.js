import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProductAdminForm from '../ProductAdminForm/ProductAdminForm';
import ProductList from '../ProductsList/ProductsList';

class ProductAdminDisplay extends Component {
  state = {
    heading: 'Products',
  };

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_PRODUCT' }); 
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <ProductAdminForm />
        <ProductList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProductAdminDisplay);
