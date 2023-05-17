import React, { useState } from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import HamburgerLogo from '../../assets/images/HamburgerLogo.svg';
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';
import HamburgerClose from '../../assets/images/HamburgerClose.svg';

const Hamburger = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleLinks = () => {
    setShowHamburger(!showHamburger);
    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
  };

  return (
    <>
      <div className={showHamburger ? 'showHamburger' : 'hamburger'}>
        <div className="containerHamburger">
          <Link to="/" className="logoHamburger">
            <MainImage src={HamburgerLogo} alt="logo de kraken en menu hamburguesa" />
          </Link>
          <MainImage
            src={showHamburger ? HamburgerClose : HamburgerIcon}
            alt="icono representativo a menu hamburguesa"
            onClick={toggleLinks}
          />
        </div>
        <div className={`containerLinksHidden ${showHamburger ? 'show' : ''}`}>
          <Link to="/about-us" onClick={toggleLinks}>
            ABOUT US
          </Link>
          <Link to="/our-services" onClick={toggleLinks}>
            OUR SERVICES
          </Link>
          <Link
            to="https://www.artstation.com/krakencreativestudios"
            rel="noopener noreferrer"
            onClick={toggleLinks}>
            PORTFOLIO
          </Link>
          <Link to="/project-gothika" onClick={toggleLinks}>
            PROJECT GOTHIKA
          </Link>
          <Link to="/contact-us" onClick={toggleLinks}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
