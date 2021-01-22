import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import AboutPage from '../AboutPage/AboutPage';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CompletedOrdersAdmin from '../CompletedOrdersAdmin/CompletedOrdersAdmin';
import Consultations from '../Consultations/Consultations';
import ConsultForm from '../ConsultForm/ConsultForm';
import ContactPage from '../ContactPage/ContactPage';
import CustomNav from '../CustomNav/CustomNav';
import Footer from '../Footer/Footer';
import IncompleteOrdersAdmin from '../IncompleteOrdersAdmin/IncompleteOrdersAdmin';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import PreviousOrders from '../PreviousOrders/PreviousOrders';
import ProductAdminDisplay from '../ProductAdminDisplay/ProductAdminDisplay';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPage from '../RegisterPage/RegisterPage';
import UserPage from '../UserPage/UserPage';

import './App.css';

class App extends Component {

  // calls the route for the user information
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  } // end componentDidMount

  render() {
    return (
      <Router>
        <div>
          <CustomNav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}/>
            <Route
              // shows CartPage at all times (logged in or not)
              exact
              path="/cart"
              component={CartPage}/>
            <Route
              // shows ContactPage at all times (logged in or not)
              exact
              path="/contact"
              component={ContactPage}/>
            <Route
              // shows Consultations at all times (logged in or not)
              exact
              path="/consultations"
              component={Consultations}/>
            <Route
              // shows ProductList at all times (logged in or not)
              exact
              path="/consult-form"
              component={ConsultForm}/>
            <Route
              // shows LandingPage at all times (logged in or not)
              exact
              path="/home"
              component={LandingPage}/>
            <Route
              // shows ProductList at all times (logged in or not)
              exact
              path="/product"
              component={ProductDisplay}/>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows PreviousOrders else shows LoginPage
              exact
              path="/previous-orders"
              component={PreviousOrders}/>
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}/>
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/checkout"
              component={CheckoutPage}/>
            {(this.props.store.user.administrator) &&
            <>
            
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin-completed-orders"
              component={CompletedOrdersAdmin}/>
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin-incomplete-orders"
              component={IncompleteOrdersAdmin}/>
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin-product-add"
              component={ProductAdminDisplay}/>
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/user"
              component={UserPage}
              authRedirect="/login"/>
            </>
            }
            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"/>
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows CheckoutPage at "/checkout"
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/checkout"/>
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"/>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
