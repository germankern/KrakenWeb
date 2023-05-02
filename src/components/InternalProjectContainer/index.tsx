import React from 'react';
import './index.scss';
import { TheInternalProject } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';

const InternalProjectContainer = ({ internalProject }: Props) => {
  return (
    <>
      <div className="container-internal-project-home">
        {internalProject
          .map((edge) => edge.node)
          .map((project) => (
            <div key={project.id}>
              <div className="title">
                <MainImage src={project.title.url} alt={project.title.description} />
              </div>
              <div className="colums">
                <div className="rows">
                  <MainImage src={project.image.url} alt="foto" />
                  <h4>{project.description.description}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

interface Props {
  internalProject: TheInternalProject[];
}

export default InternalProjectContainer;
