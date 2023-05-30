import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Helmet } from 'react-helmet';
import favicon from '../../images/icon.png';

import './index.scss';

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div className="layout">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
interface Props {
  children: React.ReactNode;
  title: string;
}
