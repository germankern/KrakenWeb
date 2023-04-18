import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { OurWork } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import './index.scss';
// import Img01 from '../../assets/images/Carrousel02.png';
// import Img02 from '../../assets/images/Carrousel03.png';
// import Img03 from '../../assets/images/Carrousel04.png';
// import Img04 from '../../assets/images/Carrousel04.png';
// import Img00 from '../../assets/images/Carrousel04.png';

// const images = [Img00, Img01, Img02, Img03, Img04];

const OurWorkSection = (props: Props) => {
  const ourWorks: OurWork[] = get(props, 'data.allContentfulWork.nodes');
  const containerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;

      setMaxDrag(-containerWidth + 350);
    }
  }, [containerRef]);

  return (
    <>
      <div className="our-work">
        <h3>OUR WORK</h3>
        <motion.div className="slider-container" ref={containerRef}>
          <motion.div
            className="slider"
            drag="x"
            dragElastic={1}
            dragMomentum={true}
            dragConstraints={{ left: 0, right: maxDrag }}>
            {ourWorks.map((workImage) => (
              <motion.div className="item" key={workImage.id}>
                <MainImage src={workImage.image} alt={workImage.description} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

interface Props {
  data: {
    allContentfulWork: {
      nodes: OurWork[];
    };
  };
}

export default OurWorkSection;

// export const pageQuery = graphql`
//   query OurWorkQuery {
//     allContentfulWork(sort: { order: ASC }) {
//       nodes {
//         id
//         order
//         image {
//           name
//           description
//         }
//       }
//     }
//   }
// `;
