import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      {' '}
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );

  return (
    <div className="navbar">
      <div className="links">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links-container">
          <Menu />
        </div>
      </div>

      <div className="sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="menu-container scale-up-center">
            <div className="menu-links">
              <Menu />
            </div>

            <div className="menu-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
