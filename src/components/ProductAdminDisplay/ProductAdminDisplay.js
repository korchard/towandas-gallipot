import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductAdminForm from '../ProductAdminForm/ProductAdminForm';
import ProductList from '../ProductList/ProductList';

class ProductAdminDisplay extends Component {

  // calld the GET route to render products
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_PRODUCT' }); 
  } // end componentDidMount

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
