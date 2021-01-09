import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RegisterForm.css';

class RegisterForm extends Component {
  state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      street_address: '',
      city: '',
      state: '',
      zip: '',
      phone_number: '',
      email_address: ''
  };

  registerUser = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        street_address: this.state.street_address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone_number: this.state.phone_number,
        email_address: this.state.email_address
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
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="first_name">
            First Name:
            <input
              type="first_name"
              name="first_name"
              value={this.state.first_name}
              required
              onChange={this.handleInputChangeFor('first_name')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="last_name">
            Last Name:
            <input
              type="last_name"
              name="last_name"
              value={this.state.last_name}
              required
              onChange={this.handleInputChangeFor('last_name')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="street_address">
            Street Address:
            <input
              type="street_address"
              name="street_address"
              value={this.state.street_address}
              required
              onChange={this.handleInputChangeFor('street_address')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              type="city"
              name="city"
              value={this.state.city}
              required
              onChange={this.handleInputChangeFor('city')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="state">
            State:
            <input
              type="state"
              name="state"
              value={this.state.state}
              required
              onChange={this.handleInputChangeFor('state')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="zip">
            Zip:
            <input
              type="zip"
              name="zip"
              value={this.state.zip}
              required
              onChange={this.handleInputChangeFor('zip')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone_number">
            Phone Number:
            <input
              type="phone_number"
              name="phone_number"
              value={this.state.phone_number}
              // required
              onChange={this.handleInputChangeFor('phone_number')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email_address">
            Email Address:
            <input
              type="email_address"
              name="email_address"
              value={this.state.email_address}
              required
              onChange={this.handleInputChangeFor('email_address')}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
