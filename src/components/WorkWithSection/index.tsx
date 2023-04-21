import React from 'react';
import { Company } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import './index.scss';
import CompaniesTitle from '../../assets/images/CompaniesMembers.svg';
import CompaniesTitleMobile from '../../assets/images/CompaniesTitleMobile.svg';
import { groupCompaniesByRow } from '../../utils';

const WorkWithSection = ({ companies }: Props) => {
  const rows = groupCompaniesByRow(companies);

  return (
    <>
      <div className="main-container">
        <div className="work-with-container">
          <MainImage
            className="img-desktop"
            src={CompaniesTitle}
            alt="titulo de companias que trabajaron con nosotros"
          />
          <MainImage
            className="img-mobile"
            src={CompaniesTitleMobile}
            alt="titulo de companias que trabajaron con nosotros"
          />
          <div className="slider-brands-container">
            {rows.map((companiesOnRow) => (
              <>
                <div className="slider-brands" key={companiesOnRow.length}>
                  {[...companiesOnRow, ...companiesOnRow].map((company) => (
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
              </>
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
