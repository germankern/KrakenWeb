import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.scss';
import HomeBanner from '../../assets/images/HomeBanner.png';
// import HomeText1 from '../../assets/images/HomeText1.png';
// import HomeText2 from '../../assets/images/HomeText2.png';
// import HomeText3 from '../../assets/images/HomeText3.png';

const HeroSection = () => {
  return (
    <div className="heroSection">
      <MainImage src={HomeBanner} alt="descripcion" />
      <div className="textHeroSection">
        <div className="row">
          <h2>60+</h2>
          <p>Professionals & Growing</p>
          <h2>DIVERSE</h2>
          <p>Team Members across the World</p>
          <h2>EXTENSIVE</h2>
          <p>Professional Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
