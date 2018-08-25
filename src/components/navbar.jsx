import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
/*
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';


library.add(faHotel);
*/
const NavBar = () => (
  <div className="Navbar">
    <div className="logo">
      <span className="header" />
    </div>
    <div>
      <ul className="nav">
        <li className="item">
          <Link className="item" to="/">View Properties</Link>
        </li>
        <li className="item">
          <Link className="item" to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
