import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import HeroSection from '../components/HeroSection';
import OurWorkSection from '../components/OurWorkSection';
import { Company, OurWork } from '../interfaces';
import './index.scss';
import WorkWithSection from '../components/WorkWithSection';

const HomePage = (props: Props) => {
  const works: OurWork[] = get(props, 'data.allContentfulOurWork.nodes');
  const companies: Company[] = get(props, 'data.allContentfulCompany.nodes');

  return (
    <div className="home-container">
      <HeroSection />
      <WorkWithSection companies={companies} />;
      <OurWorkSection works={works} />;
    </div>
  );
};

interface Props {
  data: {
    allContentfulOurWork: {
      nodes: OurWork[];
    };
    allContentfulCompany: {
      nodes: Company[];
    };
  };
}

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulOurWork {
      nodes {
        id
        order
        title
        link
        image {
          height
          id
          title
          width
          url
          description
        }
      }
    }
    allContentfulCompany {
      nodes {
        id
        order
        link
        row
        image {
          id
          description
          url
          width
          height
        }
      }
    }
  }
`;

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
