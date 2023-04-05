import React from 'react';
import './index.scss';

const MediaSelector = ({
  fromPhoneLG,
  fromTabletSm,
  fromTablet,
  fromDesktop,
  fromDesktopLG,
  fromDesktopXL,
  upToPhoneLG,
  upToTabletSm,
  upToTablet,
  upToDesktop,
  upToDesktopLG,
  upToDesktopXL,
  children,
}: Props) => {
  const fromStyle = fromPhoneLG
    ? 'fromPhoneLG'
    : fromTabletSm
    ? 'fromTabletSm'
    : fromTablet
    ? 'fromTablet'
    : fromDesktop
    ? 'fromDesktop'
    : fromDesktopLG
    ? 'fromDesktopLG'
    : fromDesktopXL
    ? 'fromDesktopXL'
    : '';
  const upToStyle = upToPhoneLG
    ? 'upToPhoneLG'
    : upToTabletSm
    ? 'upToTabletSm'
    : upToTablet
    ? 'upToTablet'
    : upToDesktop
    ? 'upToDesktop'
    : upToDesktopLG
    ? 'upToDesktopLG'
    : upToDesktopXL
    ? 'upToDesktopXL'
    : '';

  return <div className={`${fromStyle} ${upToStyle}`}>{children}</div>;
};

interface Props {
  fromPhoneLG?: boolean;
  fromTabletSm?: boolean;
  fromTablet?: boolean;
  fromDesktop?: boolean;
  fromDesktopLG?: boolean;
  fromDesktopXL?: boolean;
  upToPhoneLG?: boolean;
  upToTabletSm?: boolean;
  upToTablet?: boolean;
  upToDesktop?: boolean;
  upToDesktopLG?: boolean;
  upToDesktopXL?: boolean;
  children: React.ReactNode;
}

export default MediaSelector;
