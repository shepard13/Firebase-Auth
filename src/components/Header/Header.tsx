import React from 'react';
import icon from '../../assets/images/icons8-tooth-40.png';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='flex-container'>
        <div className='logo'>
          <img className='logo-icon' src={icon} />
          <h1>VMKSP</h1>
        </div>
        <nav className='nav'>
          <ul>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>INFO</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
