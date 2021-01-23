import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// STYLING
import './RegisterPage.css';

class RegisterPage extends Component {
  
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <div>
          <RegisterForm />

          <center>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                this.props.history.push('/login');
              }}
            >
              Login
            </button>
          </center>
        </div>
        <div>
          <center>
            <img src={window.location.origin + '/image/stjohns.png'} 
                      alt="st. john's wort" 
                      className="flower"/>
          </center>
        </div>
      </>
    );
  }
}

export default withRouter(RegisterPage);
