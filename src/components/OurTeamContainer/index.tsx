import React from 'react';
import './index.scss';
import { OurTeam } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';

const OurTeamContainer = ({ ourTeam }: Props) => {
  return (
    <>
      <div className="container-our-team">
        {ourTeam
          .map((edge) => edge.node)
          .map((team) => (
            <div key={team.id}>
              <div className="title">
                <MainImage src={team.title.url} alt={team.title.description} />
              </div>
              <div className="colums">
                <div className="rows">
                  <MainImage src={team.image.url} alt="foto" />
                  <h4>{team.description.description}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

interface Props {
  ourTeam: OurTeam[];
}

export default OurTeamContainer;
