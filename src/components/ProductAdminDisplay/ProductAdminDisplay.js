import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProductAdminForm from '../ProductAdminForm/ProductAdminForm';
import ProductList from '../ProductList/ProductList';

class ProductAdminDisplay extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_PRODUCT' }); 
  }

  render() {
    return (
      <div>
        <ProductAdminForm />
        <ProductList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProductAdminDisplay);
