import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <NavLink 
        className=''
        to='/'
      >
        Home
      </NavLink>
      <NavLink to='/service'>Service</NavLink>
      <NavLink to='/careers'>Careers</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}