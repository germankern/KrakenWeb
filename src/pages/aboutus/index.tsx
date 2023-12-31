import React from 'react';
import { graphql } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import { OurTeam, StudioHead } from '../../interfaces';
import './index.scss';
import BannerAboutUs from '../../assets/images/BannerAboutUs.png';
import BannerAboutUsMobile from '../../assets/images/BannerAboutUsMobile.png';
import LinkedinMembers from '../../assets/images/LinkedinMembers.svg';
import OurTeamContainer from '../../components/OurTeamContainer';
import { Helmet } from 'react-helmet';

const AboutUsPage = (props: Props) => {
  const studioHeads: StudioHead[] = get(props, 'data.allContentfulStudioHead.nodes');
  const ourTeam: OurTeam[] = get(props, 'data.allContentfulOurTeam.edges');

  return (
    <>
      <Helmet>
        <title>Art Outsourcing Done Right | Kraken Creative Studios</title>
      </Helmet>
      <div className="about-us">
        <MainImage
          className="banner-desktop"
          src={BannerAboutUs}
          alt="banner de seccion sobre nosotros"
        />
        <MainImage
          className="banner-mobile"
          src={BannerAboutUsMobile}
          alt="banner de seccion sobre nosotros"
        />
        <div className="membersContainer">
          {studioHeads.map((member) => (
            <div className="member" key={member.id}>
              <div className="member-img">
                <MainImage src={member.avatar.url} alt={member.avatar.description} />
                <a
                  className="linkedin-icon"
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <MainImage src={LinkedinMembers} alt="icono de linkedin" />
                </a>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
                <h5>{member.trajectory}</h5>
                <h6>{member.quote}</h6>
              </div>
            </div>
          ))}
        </div>
        <OurTeamContainer ourTeam={ourTeam} />
      </div>
    </>
  );
};

interface Props {
  data: {
    allContentfulStudioHead: {
      nodes: StudioHead[];
    };
    allContentfulOurTeam: {
      edges: OurTeam[];
    };
  };
}

export default AboutUsPage;

export const pageQuery = graphql`
  query AboutUsQuery {
    allContentfulStudioHead(sort: { order: ASC }) {
      nodes {
        id
        name
        quote
        title
        order
        trajectory
        linkedinUrl
        avatar {
          url
          filename
          height
          width
          title
          description
        }
      }
    }
    allContentfulOurTeam {
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
