import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import './index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return <div className="pageStyles"></div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
