import React from 'react';

// image
import Logo from '../assets/img/slider/logo.webp';

function Navbar() {
    return (
         <section id="menu">
    <div className="container">
      <div className="menu-area">
        <div className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>          
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="index.html">HOME</a></li>
              <li><a href="#">FEATURED</a></li>
              <li><img className="jmahal-logo" src={Logo} alt='Golden logo Jmahal' /></li>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>       
    </div>
  </section> 
    )
}

export default Navbar
