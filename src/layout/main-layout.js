import React, { Fragment } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import styles from './main-layout.module.css'

export const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles['main']}>{children}</main>
      <Footer />
    </Fragment>
  );
};
