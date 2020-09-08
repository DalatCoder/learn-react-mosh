import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
