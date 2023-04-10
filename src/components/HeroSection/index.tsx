import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.scss';
import HomeBanner from '../../assets/images/HomeBanner.svg';
import HomeText from '../../assets/images/HomeText.svg';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <MainImage src={HomeBanner} alt="mod benefics" />
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
