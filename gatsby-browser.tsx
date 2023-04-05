import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/Layout';
import '@fontsource/merriweather';
import '@fontsource/merriweather-sans';
import '@fontsource/source-sans-pro';
import '@fontsource/barlow';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
