import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import '../styles/NavBar.css';
import { CartWidget } from './CartWidget';
import { Categories } from './Categories';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link to={'/'} className="nav-link text-white">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/logo.png?alt=media&token=df45ee33-5fe5-4dca-ba3c-ad1649b920ed" alt="Logo" className="navbar-brand" />
                </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Categories />
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

