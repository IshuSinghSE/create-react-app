import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='Nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/qrcode'>Qcode</NavLink>
        <NavLink to='/weather'>Weather</NavLink>
        
    </nav>
  )
}
