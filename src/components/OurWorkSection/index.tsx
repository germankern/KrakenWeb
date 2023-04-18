import React, { useEffect, useRef, useState } from 'react';
import { OurWork } from '../../interfaces';
import { MainImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import './index.scss';

const OurWorkSection = ({ works }: Props) => {
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
            {works.map((work) => (
              <motion.div className="item" key={work.id}>
                <MainImage src={work.image.url} alt={work.image.description} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

interface Props {
  works: OurWork[];
}

export default OurWorkSection;
