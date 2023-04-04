import React from 'react';
import './index.scss';
import NavBar from '../NavBar';

export default function Header() {
  return (
    <div className="header">
      <NavBar />
      <div className="innerContainer">
        <h2 className="text">Header</h2>
      </div>
    </div>
  );
}
