import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import BannerProjectGothika from '../../assets/images/BannerProjectGothika.png';
import BannerProjectGothikaMobile from '../../assets/images/BannerProjectGothikaMobile.png';

const ProjectGothikaPage = () => {
  return (
    <div className="project-gothika">
      <MainImage
        className="banner-desktop"
        src={BannerProjectGothika}
        alt="banner seccion de contacto"
      />
      <MainImage
        className="banner-mobile"
        src={BannerProjectGothikaMobile}
        alt="banner seccion de contacto"
      />
      <main className="main-container-project-gothika">
        <h2>Coming soon...</h2>
      </main>
    </div>
  );
};

export default ProjectGothikaPage;
