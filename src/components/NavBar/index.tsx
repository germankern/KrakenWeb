import React, { useState } from 'react';
import './index.scss';
import LogoNavbar from '../../../public/static/LogoNavbar.png';

const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleClick = (event) => {
    setSelectedPage(event.target.textContent);
  };

  const isSelected = (page) => {
    return selectedPage === page ? 'selected' : 'null';
  };

  return (
    <>
      <nav className="navbar">
        <div className="containerNavbar">
          <a
            href="https://faceitcitasrapidas.com/"
            target="_blank"
            className={isSelected('ABOUT US')}
            onClick={handleClick}>
            ABOUT US
          </a>
          <a
            href="https://faceitcitasrapidas.com/"
            target="_blank"
            className={isSelected('OUR SERVICES')}
            onClick={handleClick}>
            OUR SERVICES
          </a>
          <a href="https://faceitcitasrapidas.com/">
            <img src={LogoNavbar} alt="logo kraken"></img>
          </a>
          <a
            href="https://faceitcitasrapidas.com/"
            target="_blank"
            className={isSelected('PORTFOLIO')}
            onClick={handleClick}>
            PORTFOLIO
          </a>
          <a
            href="https://faceitcitasrapidas.com/"
            target="_blank"
            className={isSelected('PROJECT GOTHIKA')}
            onClick={handleClick}>
            PROJECT GOTHIKA
          </a>
        </div>
        <div className="containerBtnContactUs">
          <button className="btnContactUs">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
