import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuth } from '../../utils/auth/login';
// import styles from './header.module.css'
import './header.css';

export const Header = () => {
  return (
    <header>
      {/* <nav className={styles['nav']}> */}
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='react-component'>React Component</NavLink>
          </li>
          {/* <li><NavLink to="/use-fc">Use Fucntion Component</NavLink></li> */}
          {/* <li><NavLink to="/use-cc">Use Class Component</NavLink></li> */}
          {/* <li><NavLink to="/react-hook">React Hook</NavLink></li> */}

          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>

          <li>
            <NavLink to='/store'>Store</NavLink>
          </li>
        </ul>
        <ul>
          {isAuth() ? (
            <li>
              <NavLink to='/logout'>Logout</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
