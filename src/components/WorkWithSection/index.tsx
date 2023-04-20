import React from 'react';
import { Company } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import './index.scss';
import CompaniesTitle from '../../assets/images/CompaniesMembers.svg';

const WorkWithSection = ({ companies }: Props) => {
  return (
    <>
      <div className="work-with-container">
        <MainImage src={CompaniesTitle} alt="titulo de companias que trabajaron con nosotros" />
        <div className="slider-brands-container">
          <div className="slider-brands">
            {companies.map((company) => (
              <a
                className="slide"
                href={company.link}
                target="_blank"
                key={company.id}
                rel="noopener noreferrer">
                <MainImage
                  className="img-company"
                  src={company.image.url}
                  alt={company.image.description}
                />
              </a>
            ))}
          </div>
          <div className="slider-brands">
            {companies.map((company) => (
              <a
                className="slide"
                href={company.link}
                target="_blank"
                key={company.id}
                rel="noopener noreferrer">
                <MainImage
                  className="img-company"
                  src={company.image.url}
                  alt={company.image.description}
                />
              </a>
            ))}
          </div>
          <div className="slider-brands">
            {companies.map((company) => (
              <a
                className="slide"
                href={company.link}
                target="_blank"
                key={company.id}
                rel="noopener noreferrer">
                <MainImage
                  className="img-company"
                  src={company.image.url}
                  alt={company.image.description}
                />
              </a>
            ))}
          </div>
          <div className="slider-brands">
            {companies.map((company) => (
              <a
                className="slide"
                href={company.link}
                target="_blank"
                key={company.id}
                rel="noopener noreferrer">
                <MainImage
                  className="img-company"
                  src={company.image.url}
                  alt={company.image.description}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface Props {
  companies: Company[];
}

export default WorkWithSection;
