import React, { useEffect, useState } from 'react';
import { BasePage } from '../../components/base-page';
import { withLoading } from '../../HOC/with-loading';

export const StoreIndexPage = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) =>{
        setProducts(products)
        setIsLoading(false)
      });
  }, []);

  const BasePageWithLoading = withLoading(BasePage)
  return (
  <BasePageWithLoading title='Store' isloadng={isLoading}>
    {products.map(product=>(
      <div key={product.id}>
        <img src={product.image} alt='' />
      </div>
    ))}
  </BasePageWithLoading>);
};
