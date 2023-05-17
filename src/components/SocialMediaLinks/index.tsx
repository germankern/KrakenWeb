import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import InstagramSVG from '../../assets/images/InstagramSVG.svg';
import TwitterSVG from '../../assets/images/TwitterSVG.svg';
import FacebookSVG from '../../assets/images/FacebookSVG.svg';
import LinkedinSVG from '../../assets/images/LinkedinSVG.svg';
import WhatsAppSVG from '../../assets/images/WhatsAppSVG.svg';

const SocialMediaLinks = () => {
  return (
    <>
      <div className="social-media-container">
        <h4>Reach out in social media</h4>
        <div className="links-media">
          <a
            href="https://www.instagram.com/studioskrakencreative/"
            target="_blank"
            rel="noopener noreferrer">
            <MainImage src={InstagramSVG} alt="icono de instagram" />
          </a>
          <a href="https://twitter.com/_krakenstudio" target="_blank" rel="noopener noreferrer">
            <MainImage src={TwitterSVG} alt="icono de twitter" />
          </a>
          <a href="https://www.facebook.com/krakenverse" target="_blank" rel="noopener noreferrer">
            <MainImage src={FacebookSVG} alt="icono de facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/81962351/admin/"
            target="_blank"
            rel="noopener noreferrer">
            <MainImage src={LinkedinSVG} alt="icono de linkedin" />
          </a>
          <a href="https://wa.me/14152864255" target="_blank" rel="noopener noreferrer">
            <MainImage src={WhatsAppSVG} alt="icono de whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMediaLinks;
