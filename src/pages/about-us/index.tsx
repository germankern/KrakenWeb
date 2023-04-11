import React from 'react';
import { graphql } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import { StudioHead } from '../../interfaces';
import './index.scss';
import BannerAboutUs from '../../assets/images/BannerAboutUs.svg';

const AboutUsPage = (props: Props) => {
  const studioHeads: StudioHead[] = get(props, 'data.allContentfulStudioHead.nodes');

  return (
    <div className="about-us">
      <MainImage src={BannerAboutUs} alt="banner de seccion sobre nosotros" />
      <div className="membersContainer">
        {studioHeads.map((member) => (
          <div className="member" key={member.id}>
            <div className="member-img">
              <MainImage src={member.avatar.url} alt={member.avatar.description} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <h5>{member.quote}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  data: {
    allContentfulStudioHead: {
      nodes: StudioHead[];
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
  }
`;
