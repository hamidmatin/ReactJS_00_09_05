import React from 'react';
import { Loading } from '../loading';
import styles from './base-page.module.css';
import { Helmet } from 'react-helmet'

export const BasePage = ({ title, className = 'container', children }) => {
  // console.log(styles);
  return (
    <div className={className}>
      <Helmet>
        <title>React Casestude | {title}</title>
        <meta name='description' content={title} />
      </Helmet>
      {/* {this.state.isLoading? <Loading /> : null} */}
      {/* {isLoading && <Loading /> } */}

      <h2 className={styles['title']}>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};
