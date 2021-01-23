import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

// STYLING
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <>
        <div>
          <LoginForm />

          <center>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                this.props.history.push('/registration');
              }}>
                Register
            </button>
          </center>
        </div>
        <div>
        <center>
          <img src={window.location.origin + '/image/fungus2.png'} 
                    alt="fungus" 
                    className="flower"/>
        </center>
      </div>
    </>
    );
  }
}

export default withRouter(LoginPage);
