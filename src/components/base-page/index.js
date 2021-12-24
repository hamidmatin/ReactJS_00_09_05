import React from 'react';
import { Loading } from '../loading';
import styles from './base-page.module.css';

export const BasePage = ({ title, isLoading, className = 'container', children }) => {
  // console.log(styles);
  return (
    <div className={className}>
      {/* {this.state.isLoading? <Loading /> : null} */}
      {isLoading && <Loading /> }

      <h2 className={styles['title']}>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};
