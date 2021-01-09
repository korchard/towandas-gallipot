import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProductsItem from '../ProductsItem/ProductsItem';

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
        {this.props.store.product.map((item) => {
            return (
                <ProductsItem key= {item.id} item={item}/>
            );
        })} 
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProductsList);
