import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import HamburgerClose from '../../assets/images/HamburgerClose.png';
import HamburgerLogo from '../../assets/images/HamburgerLogo.png';
import HamburgerIcon from '../../assets/images/HamburgerIcon.png';
import { Link } from 'gatsby';

const Hamburger = () => {
  return (
    <>
      <div className="hamburger">
        <div className="containerHamburger">
          <MainImage src={HamburgerIcon} alt="icono de forma de cruz" />
          <MainImage src={HamburgerLogo} alt="icono de forma de cruz" />
          <MainImage src={HamburgerClose} alt="icono de forma de cruz" />
        </div>
        <div className="containerLinks">
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/">OUR SERVICES</Link>
          <Link to="/">PORTFOLIO</Link>
          <Link to="/">PROJECT GOTHIKA</Link>
          <Link to="/">CONTACT US</Link>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
