import React, { useState } from 'react';
import ReactDom from 'react-dom';

import './Navbar.css';

const Navbar = () => {

  return (
    <nav class="navbar bg-body-tertiary fixed-top shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div class="container-fluid">
        <a style={{fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 'bolder', textDecoration: 'underline'}} class="navbar-brand" href="#">GymLyf</a>
        <img height={'50rem'} src={'https://cdn-icons-png.flaticon.com/128/185/185590.png'} />
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div style={{backgroundColor: 'black'}} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 style={{fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: '1000', color: 'white', textDecoration: 'underline'}} class="offcanvas-title" id="offcanvasNavbarLabel">GymLyf</h5>
            <button style={{filter: 'invert(100%)'}} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul  class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a style={{fontSize: '20px', color: 'white'}} class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a style={{fontSize: '20px', color: 'white' }} class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a style={{fontSize: '20px', color: 'white'}} class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a style={{fontSize: '20px', color: 'white'}} class="nav-link" href="#">Events</a>
              </li>
              <li class="nav-item dropdown">
                <a style={{fontSize: '20px', color: 'white'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Yoga</a></li>
                  <li><a class="dropdown-item" href="#">Zumba Dance</a></li>
                  <li><a class="dropdown-item" href="#">Light exercise</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar;
