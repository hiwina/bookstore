import React from 'react';
import { Link } from 'react-router-dom';
import user from '../user.png';

const Navbar = () => (

  <header>
    <nav className="d-flex container-center">
      <div className="d-flex left">
        <h1 className="logo">BookStore CMS</h1>
        <ul className="d-flex menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Category">Category</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={user} alt="imgs" width="40px" className="user" />
      </div>
    </nav>
  </header>
);
export default Navbar;
