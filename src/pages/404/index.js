import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '70vh',
      }}
    >
      <h1>404 Error</h1>
      <p>Page Not found <Link to='/'>Home</Link></p>
    </div>
  );
};
