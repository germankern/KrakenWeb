import React, { useState } from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import HamburgerClose from '../../assets/images/HamburgerClose.png';
import HamburgerLogo from '../../assets/images/HamburgerLogo.png';
import HamburgerIcon from '../../assets/images/HamburgerIcon.png';
import { Link } from 'gatsby';

const Hamburger = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleLinks = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <>
      <div className="hamburger">
        <div className="containerHamburger">
          <MainImage
            src={HamburgerIcon}
            alt="icono representativo a menu hamburguesa"
            onClick={toggleLinks}
          />
          <MainImage
            className={showHamburger ? '' : 'logoHamburger'}
            src={HamburgerLogo}
            alt="logo de kraken"
          />
          <MainImage
            className={showHamburger ? '' : 'hiddenX'}
            src={HamburgerClose}
            alt="icono de forma de cruz"
            onClick={toggleLinks}
          />
        </div>
        <div className={`containerLinksHidden ${showHamburger ? 'show' : ''}`}>
          <Link to="/about-us" onClick={toggleLinks}>
            ABOUT US
          </Link>
          <Link to="/" onClick={toggleLinks}>
            OUR SERVICES
          </Link>
          <Link to="/" onClick={toggleLinks}>
            PORTFOLIO
          </Link>
          <Link to="/" onClick={toggleLinks}>
            PROJECT GOTHIKA
          </Link>
          <Link to="/" onClick={toggleLinks}>
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
