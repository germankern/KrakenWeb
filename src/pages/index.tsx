import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import './index.scss';
import HeroSection from '../components/HeroSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="pageStyles">
      <HeroSection />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
