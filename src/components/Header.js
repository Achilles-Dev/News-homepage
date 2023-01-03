import React from 'react';
import Logo from '../../assets/images/logo.svg'
import Close from '../../assets/images/icon-menu-close.svg';
import MenuIcon from '../../assets/images/icon-menu.svg';

const Header = () => {
  const displayMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.add('active');
  }

  const closeMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('active')
  }

  return (
    <>
      <nav className="header">
        <img src={Logo} alt='Logo' />
        <ul className="right-nav">
          <li><a href='#home'>Home</a></li>
          <li><a href='#new'>New</a></li>
          <li><a href='#popular'>Popular</a></li>
          <li><a href='#trending'>Trending</a></li>
          <li><a href='#categories'>Categories</a></li>
        </ul>
        <button className="menu-icon" onClick={displayMenu}><img src={MenuIcon} alt='Menu Icon' /></button>
      </nav>
      <div className="mobile-menu">
        <img onClick={closeMenu} className="close-icon" src={Close} alt='Close' />
        <ul className="menu-links">
          <li><a href='#home'>Home</a></li>
          <li><a href='#new'>New</a></li>
          <li><a href='#popular'>Popular</a></li>
          <li><a href='#trending'>Trending</a></li>
          <li><a href='#categories'>Categories</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;