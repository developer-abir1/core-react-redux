import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionTypes } from '../../redux/actionType/actionTypes';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import {
  addToCart,
  miniusProduct,
  removeProducts,
} from '../../redux/action/productAction';

const ProductCart = ({ product }) => {
  const { images, title, description, quantity } = product;

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  return (
    <div className="card card-compact   bg-base-100 shadow-xl relative">
      <figure>
        <img src={images[0]} alt="Shoes" className="h-44" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 50)}</p>
        <div className="card-actions  ">
          {pathname.includes('cart') && (
            <div className="flex justify-between  items-center w-full">
              <AiFillMinusSquare
                className=" cursor-pointer"
                size={40}
                onClick={() => dispatch(miniusProduct(product))}
              />

              <button
                className="btn hover:bg-red-500 border-0    bg-red-700"
                onClick={() => dispatch(removeProducts(product))}
              >
                Remove
              </button>

              <AiFillPlusSquare
                onClick={() => dispatch(addToCart(product))}
                className=" cursor-pointer"
                size={40}
              />
            </div>
          )}
          {!pathname.includes('cart') && (
            <div className=" flex justify-center items-center w-full">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-400 w-6 items-center  justify-center flex rounded-full  absolute top-3 right-2 ">
        <span className="text-xl text-white">{quantity}</span>
      </div>
    </div>
  );
};

export default ProductCart;
