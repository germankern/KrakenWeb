import React, { useEffect, useRef, useState } from 'react';
import { OurWork } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import './index.scss';
import OurWorkImg from '../../assets/images/OurWork.svg';

const OurWorkSection = ({ works }: Props) => {
  return (
    <>
      <div className="container-section">
        <div className="our-work">
          <MainImage src={OurWorkImg} alt="our work tittle" />
        </div>
        <div className="width-container">
          <div className="slider-container">
            <div className="slider">
              {[...works, ...works].map((work) => (
                <a
                  className="link"
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={work.id}>
                  <div className="item">
                    <MainImage src={work.image.url} alt={work.image.description} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="width-container">
          <motion.div className="slider-container" ref={containerRef}>
            <motion.div
              className="slider"
              drag="x"
              dragElastic={0.5}
              dragMomentum={true}
              dragConstraints={{ left: 160, right: maxDrag }}>
              {works.map((work) => (
                <a
                  className="link"
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={work.id}>
                  <motion.div className="item">
                    <MainImage src={work.image.url} alt={work.image.description} />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div> */
}
interface Props {
  works: OurWork[];
}

export default OurWorkSection;
