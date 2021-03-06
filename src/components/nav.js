import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },

  ];

  return (
    <div className="navbar">
      <nav className="nav">
        <h1><a href="/">Bookstore CMS</a></h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}

              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="circle">
        <i className="fas fa-user" />
      </div>
    </div>
  );
};
export default Navbar;
