import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../assets/css/Components/navbar.css';

import Logo from '../assets/img/slider/logo.webp';
function Navbar() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">

        <div class="collapse navbar-collapse container" id="navbarSupportedContent">
            <div className="row">
                <div className='col-md-9'>
            <ul class="navbar-nav mr-auto" id='ul-navbar'>
                <li class="nav-item">
                    <Link class="nav-link" to='/home'>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/featured'>Featured</Link>
                </li>
                <li className='nav-item '>
                <Link to='/home'><img src={Logo} alt='gold log' id='img-logo'/></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/shop'>Shop</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
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
