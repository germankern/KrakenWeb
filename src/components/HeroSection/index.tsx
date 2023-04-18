import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.scss';
import BannerHome from '../../assets/images/BannerHome.png';
import HomeText from '../../assets/images/HomeText.svg';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <MainImage src={BannerHome} alt="mod benefics" />
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
