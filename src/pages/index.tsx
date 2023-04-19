import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import HeroSection from '../components/HeroSection';
import OurWorkSection from '../components/OurWorkSection';
import { OurWork } from '../interfaces';
import './index.scss';

const HomePage = (props: Props) => {
  const works: OurWork[] = get(props, 'data.allContentfulOurWork.nodes');

  return (
    <div className="home-container">
      <HeroSection />
      <OurWorkSection works={works} />;
    </div>
  );
};

interface Props {
  data: {
    allContentfulOurWork: {
      nodes: OurWork[];
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
  }
`;

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
