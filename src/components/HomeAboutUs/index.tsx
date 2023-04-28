import React from 'react';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';
import WeAreKraken from '../../assets/images/WeAreKraken.png';
import WhatWeDo from '../../assets/images/WhatWeDo.png';
import Helmet from '../../assets/images/Helmet.png';
import Warrior from '../../assets/images/Warrior.png';

const HomeAboutUs = () => {
  return (
    <>
      <div className="container-au-home">
        <div className="title">
          <MainImage src={WeAreKraken} alt="title" />
        </div>
        <div className="colums">
          <div className="rows">
            <MainImage src={Helmet} alt="foto" />
            <h4>
              Kraken is a video game design studio that focuses on creating unique and exciting
              experiences for their players. Their highly creative and experienced team works
              closely together to develop innovative and engaging games that can be enjoyed by
              people of all ages and skill levels. With a focus on storytelling, level design, and
              gameplay, Kraken is dedicated to creating games that challenge players and keep them
              entertained for hours.
            </h4>
          </div>
        </div>
        <div className="title">
          <MainImage src={WhatWeDo} alt="title" />
        </div>
        <div className="colums">
          <div className="rows">
            <MainImage src={Warrior} alt="foto" />
            <h4>
              Using cutting-edge tools and technologies, including Unity, Unreal Engine, Maya and
              ZBrush we create engaging and immersive game experiences that resonate with players.
              Our services include concept design, art direction, character and level design, game
              mechanics, user interface and user experience design, programming, quality assurance,
              and post-launch support. We specialize in creating games with dark and edgy themes
              that immerse players in unique and thrilling experiences. At our core, we&apos;re
              dedicated to pushing the boundaries of game design and delivering innovative solutions
              that meet the unique needs of each of our clients.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
