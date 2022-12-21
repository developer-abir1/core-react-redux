import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/Home/ProductCart';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2>This is cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 gap-4">
        {cart
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
