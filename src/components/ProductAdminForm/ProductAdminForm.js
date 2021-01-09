import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ProductAdminForm extends Component {
  state = {
      name: '',
      description: '',
      size: '',
      cost: '',
      image_path: '',
      type: ''
  };

  addProduct = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        name: this.state.name,
        description: this.state.description,
        size: this.state.size,
        cost: this.state.cost,
        image_path: this.state.image_path,
        type: this.state.type
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.addProduct}>
        <h2>Add Product</h2>
        <div>
          <label htmlFor="name">
            Item Title:
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleInputChangeFor('name')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description - Ingredients:
            <input
              type="description"
              name="description"
              value={this.state.description}
              required
              onChange={this.handleInputChangeFor('description')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="size">
            Size:
            <input
              type="size"
              name="size"
              value={this.state.size}
              required
              onChange={this.handleInputChangeFor('size')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="cost">
            Cost:
            <input
              type="cost"
              name="cost"
              value={this.state.cost}
              required
              onChange={this.handleInputChangeFor('cost')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="image_path">
            Image Path:
            <input
              type="image_path"
              name="image_path"
              value={this.state.image_path}
              required
              onChange={this.handleInputChangeFor('image_path')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            Type:
            <input
              type="type"
              name="type"
              value={this.state.type}
              required
              onChange={this.handleInputChangeFor('type')}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Add" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(ProductAdminForm);