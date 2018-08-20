import React from 'react';
import '../styles/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

library.add(faHotel);

const NavBar = () => (
  <div className="Navbar">
    <div className="logo">
      <span className="header"> </span>
    </div>
    <div>
      <ul className="nav">
        <li className="item"> <button> <FontAwesomeIcon icon="hotel" /> Surreal Estate </button> </li>
        <li className="item"> <button> View Properties </button></li>
        <li className="item"><button> Add a Property</button>
        </li>
      </ul>
    </div>
  </div>

);

export default NavBar;
