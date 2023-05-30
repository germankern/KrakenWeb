import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import HeroSection from '../components/HeroSection';
import OurWorkSection from '../components/OurWorkSection';
import { AboutHome, Company, OurWork, TheInternalProject } from '../interfaces';
import './index.scss';
import WorkWithSection from '../components/WorkWithSection';
import HomeAboutUs from '../components/HomeAboutUs';
import InternalProjectContainer from '../components/InternalProjectContainer';
import { Helmet } from 'react-helmet';

const HomePage = (props: Props) => {
  const works: OurWork[] = get(props, 'data.allContentfulOurWork.nodes');
  const companies: Company[] = get(props, 'data.allContentfulCompany.nodes');
  const aboutHome: AboutHome[] = get(props, 'data.allContentfulAboutHome.edges');
  const internalProject: TheInternalProject[] = get(
    props,
    'data.allContentfulTheInternalProject.edges'
  );

  return (
    <>
      <Helmet>
        <title>Game Art Outsourcing Veterans | Kraken Creative Studios</title>
      </Helmet>
      <div className="home-container">
        <HeroSection />
        <WorkWithSection companies={companies} />;
        <HomeAboutUs aboutHome={aboutHome} />
        <OurWorkSection works={works} />;
        <InternalProjectContainer internalProject={internalProject} />
      </div>
    </>
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
    allContentfulAboutHome: {
      edges: AboutHome[];
    };
    allContentfulInternalProject: {
      edges: TheInternalProject[];
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
    allContentfulAboutHome {
      edges {
        node {
          order
          id
          title {
            url
            width
            height
            description
          }
          image {
            url
            width
            height
            description
          }
          description {
            description
          }
        }
      }
    }
    allContentfulTheInternalProject {
      edges {
        node {
          id
          order
          title {
            url
            width
            height
            description
          }
          image {
            url
            width
            height
            description
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
