import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import BannerContactUs from '../../assets/images/BannerContactUs.png';
import BannerContactUsMobile from '../../assets/images/BannerContactUsMobile.png';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import Form from '../../components/Form';

const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <MainImage
        className="banner-desktop"
        src={BannerContactUs}
        alt="banner seccion de contacto"
      />
      <MainImage
        className="banner-mobile"
        src={BannerContactUsMobile}
        alt="banner seccion de contacto"
      />
      <Form />
      <SocialMediaLinks />
    </div>
  );
};

export default ContactUsPage;
