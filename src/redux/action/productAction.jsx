import { actionTypes } from '../actionType/actionTypes';

const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};
const miniusProduct = (product) => {
  return {
    type: actionTypes.MINS_CART,
    payload: product,
  };
};
const removeProducts = (product) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload: product,
  };
};

export { addToCart, miniusProduct, removeProducts };
