import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import { AboutHome } from '../../interfaces';

const HomeAboutUs = ({ aboutHome }: Props) => {
  return (
    <>
      <div className="container-au-home">
        {aboutHome
          .map((edge) => edge.node)
          .map((item) => (
            <div key={item.order}>
              <div className="title">
                <MainImage src={item.title.url} alt={item.title.description} />
              </div>
              <div className="colums">
                <div className="rows">
                  <MainImage src={item.image.url} alt="foto" />
                  <h4>{item.description.description}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

interface Props {
  aboutHome: AboutHome[];
}

export default HomeAboutUs;
