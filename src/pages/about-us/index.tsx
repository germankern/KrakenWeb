import React from 'react';
import { graphql } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import { StudioHead } from '../../interfaces';
import './index.scss';

const AboutUsPage = (props: Props) => {
  const studioHeads: StudioHead[] = get(props, 'data.allContentfulStudioHead.nodes');

  return (
    <div className="about-us">
      <div>
        <h3 className="title">About us!</h3>
      </div>
      <div>
        {studioHeads.map((member) => (
          <div className="member" key={member.id}>
            <MainImage src={member.avatar.url} alt={member.avatar.description} />
            <h4>{member.name}</h4>
            <h4>{member.title}</h4>
            <h4>{member.quote}</h4>
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
