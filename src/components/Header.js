import React from 'react';
import Logo from '../../assets/images/logo.svg'

const Header = () => (
  <nav className="header">
    <img src={Logo} alt='Logo' />
    <ul className="right-nav">
      <li><a href='#home'>Home</a></li>
      <li><a href='#new'>New</a></li>
      <li><a href='#popular'>Popular</a></li>
      <li><a href='#trending'>Trending</a></li>
      <li><a href='#categories'>Categories</a></li>
    </ul>
  </nav>
);

export default Header;