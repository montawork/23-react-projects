import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, closeSubmenu, targetPage, setLocation } =
    useGlobalContext();
  return (
    <nav
      className="nav"
      onMouseOver={(e) => {
        if (!e.target.classList.contains('link-btn')) {
          closeSubmenu();
        }
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {['products', 'developers', 'company'].map((category, index) => {
            return (
              <li key={index}>
                <button
                  className="link-btn"
                  onMouseOver={(e) => {
                    const { left, right, bottom } =
                      e.target.getBoundingClientRect();
                    const center = (right + left) / 2;
                    const top = bottom - 3;
                    setLocation({ center, top });
                    targetPage(index);
                  }}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
