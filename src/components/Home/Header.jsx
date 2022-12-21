import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <div className="container  m-auto">
      <Carousel transitionTime={1000}>
        <div className="h-[400px]    ">
          <img
            src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            className="h-[100%]"
            alt="Product"
          />
        </div>
        <div className="h-[400px]">
          <img
            src="https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            className="h-[100%]"
            alt="Product"
          />
        </div>
        <div className="h-[400px]  ">
          <img
            src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            className="h-[100%]   "
            alt="jsd"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
