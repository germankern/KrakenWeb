import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { PortfolioClient } from '../../interfaces';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';

const PorfolioPage = (props: Props) => {
  const portfolios: PortfolioClient[] = get(props, 'data.allContentfulPortfolioClient.nodes');
  return (
    <div className="portfolio-section">
      <h2>PORTFOLIO</h2>
      <div className="portfolios-container">
        {portfolios.map((portfolio) => (
          <div className="portfolio" key={portfolio.id}>
            <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
              <MainImage src={portfolio.image.url} alt={portfolio.image.description} />
              <div className="title-container">
                <h3>{portfolio.title}</h3>
                <h4>{portfolio.description}</h4>
              </div>
              <div className="overlay"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  data: {
    allContentfulPortfolioClient: {
      nodes: PortfolioClient[];
    };
  };
}

export default PorfolioPage;

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulPortfolioClient {
      nodes {
        id
        title
        description
        link
        image {
          url
          description
          width
          height
        }
        categories
      }
    }
  }
`;
