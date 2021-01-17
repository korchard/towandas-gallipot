import React from 'react';
import { connect } from 'react-redux';

// STYLING
import './LogOutButton.css';

// const getCookie = (cookieName) => {
//   // Get name followed by anything except a semicolon
//   const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
//   // Return everything after the equal sign, or an empty string if the cookie name not found
//   return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
// }

// state = {
//   cartItems: getCookie('cart') || 0,
//   usernameId: getCookie(this.props.store.user.id) || '',
// }

// componentDidMount = () => {
//   if (this.state.usernameId !== ''){
//     this.setState({
//       usernameId: getCookie(this.props.store.user.id)
//     });
//   }
// }

// removeCookie = () => {
//   document.cookie = "usernameId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   this.componentDidMount();
// }

const LogOutButton = (props) => (
  <button
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
      className={props.className}
      id="logOutButton"
      onClick={() => props.dispatch({ type: 'LOGOUT' })}>
          Log Out
  </button>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
