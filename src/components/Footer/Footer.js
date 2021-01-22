import React from 'react';

// STYLING
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => <div className="footer"><footer>&copy; Towanda's Gallipot 2021</footer></div>;

// function Footer() {
//     return (
//         <div class="row">
//             <div class="column">
//                 <img src={window.location.origin + '/image/footer1.png'} alt="mushrooms" className="pic"/>
//             </div>
//             <div class="column">
//                 <img src={window.location.origin + '/image/footer2.png'} alt="st. john's" className="pic"/>
//             </div>
//             <div class="column">
//                 <img src={window.location.origin + '/image/footer3.png'} alt="mushrooms" className="pic"/>
//             </div>
//             <div class="column">
//                 <img src={window.location.origin + '/image/footer4.png'} alt="mushrooms" className="pic"/>
//             </div>
//         </div>
//       );
// }
    
export default Footer;

