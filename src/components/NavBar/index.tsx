import React, { useState, useEffect } from 'react';
import './index.scss';
import LogoNavbar from '../../assets/images/LogoNavbar.png';
import { Link } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import Hamburger from '../Hamburger';

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    position: '',
    top: '0',
    width: '100%',
    backgroundColor: '',
    zIndex: '100',
  });

  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        width: '100%',
        backgroundColor: 'rgba(35, 31, 32, 0.75)',
        zIndex: '100',
      });
    } else {
      setNavbarStyle({
        position: '',
        top: '0',
        width: '100%',
        backgroundColor: '',
        zIndex: '100',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [selectedPage, setSelectedPage] = useState(null);

  const handleClick = (event) => {
    setSelectedPage(event.target.textContent);
  };

  const isSelected = (page) => {
    return selectedPage === page ? 'selected' : '';
  };

  return (
    <>
      <nav className="navbar" style={navbarStyle}>
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
          <Link
            to="https://www.artstation.com/krakencreativestudios"
            target="_blank"
            rel="noopener noreferrer"
            className={isSelected('PORTFOLIO')}
            onClick={handleClick}>
            PORTFOLIO
          </Link>
          <Link
            to="/project-gothika"
            className={isSelected('PROJECT GOTHIKA')}
            onClick={handleClick}>
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
