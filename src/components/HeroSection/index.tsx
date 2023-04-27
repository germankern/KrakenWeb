import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.scss';
import BannerHome from '../../assets/images/BannerHome.png';
import BannerHomeMobile from '../../assets/images/BannerHomeMobile.png';
import HomeText from '../../assets/images/HomeText.svg';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <MainImage className="banner-desktop" src={BannerHome} alt="mod benefics" />
        <MainImage className="banner-mobile" src={BannerHomeMobile} alt="mod benefics" />
        <div className="textHeroSection">
          <div className="row">
            <MainImage src={HomeText} alt="background giant kraken" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
