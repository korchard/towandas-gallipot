import React from 'react';

// STYLING
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => <div className="footer"><footer>&copy; Towanda's Gallipot 2021</footer></div>;

export default Footer;
