import React, { useState } from 'react';
import './index.scss';
import LogoNavbar from '../../assets/images/LogoNavbar.png';
import { Link } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';

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
          <Link to="/" className={isSelected('OUR SERVICES')} onClick={handleClick}>
            OUR SERVICES
          </Link>
          <Link to="/">
            <MainImage src={LogoNavbar} alt="logo kraken" />
          </Link>
          <Link to="/" className={isSelected('PORTFOLIO')} onClick={handleClick}>
            PORTFOLIO
          </Link>
          <Link to="/" className={isSelected('PROJECT GOTHIKA')} onClick={handleClick}>
            PROJECT GOTHIKA
          </Link>
        </div>
        <div className="containerBtnContactUs">
          <button className="btnContactUs">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
