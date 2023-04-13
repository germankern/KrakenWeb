import React from 'react';
import { graphql } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import { Service } from '../../interfaces';
import './index.scss';

const OurServicesPage = (props: Props) => {
  const services: Service[] = get(props, 'data.allContentfulService.nodes');

  return (
    <div className="our-services">
      <div className="servicesContainer">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <MainImage src={service.background.url} alt={service.background.description} />
            <h3>{service.title}</h3>
            <h4>{service.order}</h4>
            <h5>{service.id}</h5>
            <h6>{service.link}</h6>
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
