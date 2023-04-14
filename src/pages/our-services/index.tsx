import React from 'react';
import { graphql } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import { Service } from '../../interfaces';
import './index.scss';
import BannerOurServices from '../../assets/images/BannerOurServices.png';
import IconService from '../../assets/images/IconService.svg';

const OurServicesPage = (props: Props) => {
  const services: Service[] = get(props, 'data.allContentfulService.nodes');

  return (
    <div className="our-services">
      <MainImage
        className="banner-our-services"
        src={BannerOurServices}
        alt="banner de seccion our services"
      />
      <div className="services-container">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              <MainImage
                className="bg-service"
                src={service.background.url}
                alt={service.background.description}
              />
              <div className="bg-service-overlay" />
              <h3>{service.title}</h3>
              <MainImage className="icon-service" src={IconService} alt="icon services" />
            </a>
            <div className="description-service">
              <h4>{service.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  data: {
    allContentfulService: {
      nodes: Service[];
    };
  };
}

export default OurServicesPage;

export const pageQuery = graphql`
  query OurServicesQuery {
    allContentfulService(sort: { order: ASC }) {
      nodes {
        id
        order
        link
        background {
          filename
          url
          width
          height
          description
        }
        title
        description
      }
    }
  }
`;
