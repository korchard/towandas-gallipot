import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ProductsItem extends Component {
  state = {
    heading: 'Items'
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <p>{this.props.item.name} includes {this.props.item.description},
                it costs ${this.props.item.cost} for {this.props.item.size} ounces.
                This is a {this.props.item.type}.;</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProductsItem);