import React from 'react';

// css
import '../assets/css/Components/navbar.css';

import Logo from '../assets/img/slider/logo.webp';
function Navbar() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse container" id="navbarSupportedContent">
            <div className="row">
                <div className='col-md-9'>
            <ul class="navbar-nav mr-auto" id='ul-navbar'>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Featured</a>
                </li>
                <li className='nav-item '>
                <img src={Logo} alt='gold log' id='img-logo'/>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
            <ul class="navbar-nav nav-flex-icons">
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-twitter"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-instagram"></i></a>
                </li>
            </ul>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
