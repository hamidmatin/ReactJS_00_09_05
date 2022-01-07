import React, { useEffect, useState } from 'react';
import { BasePage } from '../../components/base-page';

export const StoreIndexPage = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) =>{
        setProducts(products)
      });
  }, []);
  return (
  <BasePage title='Store'>
    {products.map(product=>(
      <div key={product.id}>
        <img src={product.image} alt='' />
      </div>
    ))}
  </BasePage>);
};
