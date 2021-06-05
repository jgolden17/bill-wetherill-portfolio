import React from 'react';
import classnames from 'classnames';
import usePrimaryFolder from '../hooks/usePrimaryFolder';

const SideNav = () => {
  const location = usePrimaryFolder();

  return (
    <nav>
      <ul className="menu-list is-size-5">
        <li>
          <a className={classnames({ 'is-active': location === 'paintings' })} href="/paintings/">
            Paintings
          </a>
        </li>
        <li>
          <a className={classnames({ 'is-active': location === 'films' })} href="/films/">
            Films
          </a>
        </li>
        <li>
          <a className={classnames({ 'is-active': location === 'about' })} href="/about/">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
