import React from 'react';
import { Company } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import './index.scss';
import CompaniesTitle from '../../assets/images/CompaniesMembers.svg';

const WorkWithSection = ({ companies }: Props) => {
  console.log(companies);
  return (
    <>
      <div className="work-with-container">
        <MainImage src={CompaniesTitle} alt="titulo de companias que trabajaron con nosotros" />
      </div>
      <div className="carrousel-container">
        {companies.map((company) => (
          <a href={company.link} target="_blank" key={company.id} rel="noopener noreferrer">
            <MainImage
              className="company"
              src={company.image.url}
              alt={company.image.description}
            />
          </a>
        ))}
      </div>
    </>
  );
};

interface Props {
  companies: Company[];
}

export default WorkWithSection;
