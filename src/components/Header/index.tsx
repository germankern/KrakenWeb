import React from 'react';
import './index.scss';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';

export default function Header() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
    </>
  );
}
