import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './index.scss';

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
interface Props {
  children: React.ReactNode;
}
