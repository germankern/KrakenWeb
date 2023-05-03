import React, { useState } from 'react';
import './index.scss';
import LogoNavbar from '../../assets/images/LogoNavbar.png';
import { Link } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import Hamburger from '../Hamburger';

const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleClick = (event) => {
    setSelectedPage(event.target.textContent);
  };

  const isSelected = (page) => {
    return selectedPage === page ? 'selected' : '';
  };

  return (
    <>
      <nav className="navbar">
        <div className="containerNavbar">
          <Link to="/about-us" className={isSelected('ABOUT US')} onClick={handleClick}>
            ABOUT US
          </Link>
          <Link to="/our-services" className={isSelected('OUR SERVICES')} onClick={handleClick}>
            OUR SERVICES
          </Link>
          <Link to="/" className={isSelected('/')} onClick={handleClick}>
            <MainImage src={LogoNavbar} alt="logo kraken" />
          </Link>
          <Link to="/portfolio" className={isSelected('PORTFOLIO')} onClick={handleClick}>
            PORTFOLIO
          </Link>
          <Link to="/" className={isSelected('PROJECT GOTHIKA')} onClick={handleClick}>
            PROJECT GOTHIKA
          </Link>
        </div>
        <Link to="/contact-us" className="containerBtnContactUs" onClick={handleClick}>
          <button className="btnContactUs">Contact Us</button>
        </Link>
        <div className="hamburguer">
          <Hamburger />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
