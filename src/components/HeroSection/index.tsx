import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.scss';
import HomeBanner from '../../assets/images/HomeBanner.png';
import HomeText1 from '../../assets/images/HomeText1.svg';
import HomeText2 from '../../assets/images/HomeText2.svg';
import HomeText3 from '../../assets/images/HomeText3.svg';

const HeroSection = () => {
  return (
    <div className="heroSection">
      <MainImage src={HomeBanner} alt="descripcion" />
      <div className="textHeroSection">
        <div className="row">
          <MainImage src={HomeText1} alt="desc" />
        </div>
        <div className="row">
          <MainImage src={HomeText2} alt="desc" />
        </div>
        <div className="row">
          <MainImage src={HomeText3} alt="desc" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
