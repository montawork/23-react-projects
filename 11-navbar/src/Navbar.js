import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refContainer = useRef(null);
  const refLI = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const targetContainer = refContainer.current;
    const menuHeight = refLI.current.clientHeight * links.length;
    if (!isOpen) {
      targetContainer.style.height = `${menuHeight}px`;
    } else {
      targetContainer.style.height = 0;
    }
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="" />
          <button className="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={refContainer}>
          <ul className="links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id} ref={refLI}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
