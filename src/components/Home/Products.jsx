import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCart from './ProductCart';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="my-4">
      <h2 className="text-center text-3xl text-blue-400 mb-4">
        Our Best Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
