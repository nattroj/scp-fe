import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import '../../css/output.css';

const StyledNavLink = ({ text, ...rest }) => {

  const baseNavStyle = 'h-8 m-3 w-20 text-center rounded';
  const normalNavStyle = `${baseNavStyle} text-black-600`;
  const activeNavStyle = `${baseNavStyle} text-white bg-cover bg-green-700`;

  return (
    <NavLink style={{ lineHeight: 2 }} className={normalNavStyle} activeClassName={activeNavStyle} {...rest}>{text}</NavLink>
  )
}

export const Header = () => {

  return (
    <nav className='h-16 flex items-center justify-end bg-gray-200'>
      <StyledNavLink text='Home' exact to='/' />
      <StyledNavLink text='Services' to='/services' />
      <StyledNavLink text='Careers' to='/careers' />
      <StyledNavLink text='About' to='/about' />
      <StyledNavLink text='Contact' to='/contact' />
    </nav>
  )
}