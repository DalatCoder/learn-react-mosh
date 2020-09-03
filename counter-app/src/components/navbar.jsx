import React from 'react';

// Stateless Functional Component

const Navbar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="!#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </div>
  </nav>
);

export default Navbar;
