import React from 'react';
import './index.scss';
import NavBar from '../NavBar';
import Hamburger from '../Hamburger';

export default function Header() {
  return (
    <div className="header">
      <NavBar />
      <Hamburger />
      <div className="innerContainer">
        <h2 className="text">Header</h2>
      </div>
    </div>
  );
}
