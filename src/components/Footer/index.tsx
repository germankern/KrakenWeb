import React from 'react';
import './index.scss';
import Logo from '../../assets/images/KrakenLogo.svg';
import Mail from '../../assets/images/Mail.svg';
import Instagram from '../../assets/images/Instagram.svg';
import Twitter from '../../assets/images/Twitter.svg';
import Facebook from '../../assets/images/Facebook.svg';
import Linkedin from '../../assets/images/Linkedin.svg';
import WhatsApp from '../../assets/images/WhatsApp.svg';
import { MainImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div className="footer">
      <div className="innerContainer">
        <div className="innerContainerLeft">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms Of Use</Link>
          <Link to="/">Undead Sea Fruits</Link>
          <Link to="/">Octosoft Partners</Link>
        </div>
        <div className="innerContainerCenter">
          <MainImage src={Logo} alt="logo-kraken-studio" />
        </div>
        <div className="innerContainerRight">
          <a href="https://wa.me/14152864255" target="_blank" rel="noopener noreferrer">
            +1 (415) 286-4255
          </a>
          <a
            href="mailto:hello@krakencreativestudios.com"
            target="_blank"
            rel="noopener noreferrer">
            hello@krakencreativestudios.com{' '}
          </a>
          <div className="containerNetworks">
            <a
              href="mailto:hello@krakencreativestudios.com"
              target="_blank"
              rel="noopener noreferrer">
              <MainImage className="mail" src={Mail} alt="icono de mail" />
            </a>
            <a
              href="https://www.instagram.com/studioskrakencreative/"
              target="_blank"
              rel="noopener noreferrer">
              <MainImage src={Instagram} alt="icono de instagram" />
            </a>
            <a href="https://twitter.com/_krakenstudio" target="_blank" rel="noopener noreferrer">
              <MainImage src={Twitter} alt="icono de twitter" />
            </a>
            <a
              href="https://www.facebook.com/krakenverse"
              target="_blank"
              rel="noopener noreferrer">
              <MainImage src={Facebook} alt="icono de facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/81962351/admin/"
              target="_blank"
              rel="noopener noreferrer">
              <MainImage src={Linkedin} alt="icono de linkedin" />
            </a>
            <a href="https://wa.me/14152864255" target="_blank" rel="noopener noreferrer">
              <MainImage src={WhatsApp} alt="icono de whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
