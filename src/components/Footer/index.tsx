import React from 'react';
import './index.scss';
import Logo from '../../assets/images/KrakenLogo.png';
import Mail from '../../assets/images/Mail.png';
import Instagram from '../../assets/images/Instagram.png';
import Twitter from '../../assets/images/Twitter.png';
import Facebook from '../../assets/images/Facebook.png';
import Linkedin from '../../assets/images/Linkedin.png';
import WhatsApp from '../../assets/images/WhatsApp.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="innerContainer">
        <div className="innerContainerLeft">
          <a href="https://www.gatsbyjs.com/">Privacy Policy</a>
          <a href="https://www.gatsbyjs.com/">Terms Of Use</a>
          <a href="https://www.gatsbyjs.com/">Undead Sea Fruits</a>
          <a href="https://www.gatsbyjs.com/">Octosoft Partners</a>
        </div>
        <div className="innerContainerCenter">
          <img src={Logo} alt="logo-kraken-studio" />
        </div>
        <div className="innerContainerRight">
          <a href="https://www.gatsbyjs.com/">+1 (415) 286-4255</a>
          <a href="https://www.gatsbyjs.com/">hello@krakencreativestudios.com </a>
          <div className="containerNetworks">
            <a href="https://www.gatsbyjs.com/">
              <img className="mail" src={Mail} alt="icono de mail"></img>
            </a>
            <a href="https://www.gatsbyjs.com/">
              <img src={Instagram} alt="icono de instagram"></img>
            </a>
            <a href="https://www.gatsbyjs.com/">
              <img src={Twitter} alt="icono de twitter"></img>
            </a>
            <a href="https://www.gatsbyjs.com/">
              <img src={Facebook} alt="icono de facebook"></img>
            </a>
            <a href="https://www.gatsbyjs.com/">
              <img src={Linkedin} alt="icono de linkedin"></img>
            </a>
            <a href="https://www.gatsbyjs.com/">
              <img src={WhatsApp} alt="icono de whatsapp"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
