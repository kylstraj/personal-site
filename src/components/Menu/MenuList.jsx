import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

const className = css({
  display: 'inline-block',
  color: 'black',
  textDecoration: 'none',
});

const NavButton = ({to, children}) => (
  <Link
    className={css(
      {
        color: 'black',
        margin: '50px',
        textDecoration: 'none',
      }
    )}
    to={to}
  >
    {children}
  </Link>
);

const MenuList = ({visible}) => (
  visible && 
  (
    <div className={className}>
      <NavButton to="/about">About</NavButton>
      <NavButton to="/projects">Projects</NavButton>
      <NavButton to="/resume">Resume</NavButton>
      <NavButton to="/contact">Contact</NavButton>
    </div>
  )
);

export default MenuList;
