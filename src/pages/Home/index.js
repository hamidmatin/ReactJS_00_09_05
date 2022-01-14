import React from 'react';
import { BasePage } from '../../components/base-page';
import logo from '../../logo.svg';
import products from '../../data/product.json';
import axios from 'axios';
import { useSelector } from 'react-redux'

const HomePage = () => {
  console.log(products)

  const redux = useSelector(state => state)
  
  axios.get('/data/projects.json')
  .then(result => {
    console.log(result)
  })
  
  return (
    <BasePage title='Home'>
      <p>This Home Page</p>
      
      <p>Redux Test = {redux.reduxTest}</p>
      <p>Redux Message = {redux.message}</p>

      <img src={logo} alt='logo' width='100' />
      <img src='/images/01.jpg' alt='sdsds' />
      <hr />
      {products.map((product, idx) => (
        <div key={idx}>
          <img src={product.image} alt="sds" />
          <p>{product.name}</p>
        </div>
      ))}
    </BasePage>
  );
};

export default HomePage;
