import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CustomNav extends Component {
  

  render() {
    return (
      <div>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a href="/about">About</a>
          <a href="/consultations">Consultations</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>

        <h2>Right-sided Navigation</h2>
        <p>Click on the element below to open the right-sided navigation menu.</p>
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CustomNav);
