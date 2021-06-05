import React, { useState } from 'react';
import classnames from 'classnames';

const NavBar = ({ className, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav
      className={`navbar is-transparent ${className}`.trim()}
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: 'unset', border: 'none' }}
    >
      <div className="navbar-brand">
        <a className="navbar-item title mb-0 is-size-4" href="/">
          {title}
        </a>
        <a
          role="button"
          className={classnames('navbar-burger', { 'is-active': isVisible })}
          aria-label="menu"
          aria-expanded={isVisible.toString()}
          data-target="navbarBasicExample"
          onClick={() => setIsVisible(!isVisible)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbar" className={classnames('navbar-menu has-background-white-ter', { 'is-active': isVisible })}>
        <div className="navbar-end">
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/paintings">
            Paintings
          </a>
          <a className="navbar-item" href="/films">
            Films
          </a>
          <a className="navbar-item" href="/news">
            News
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
