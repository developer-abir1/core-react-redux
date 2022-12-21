import { actionTypes } from '../actionType/actionTypes';

const initilState = {
  cart: [],
};

export const productReducer = (state = initilState, action) => {
  const existingProduct = state.cart.find(
    (cart) => cart.id === action.payload.id
  );
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (existingProduct) {
        const newCart = state.cart.filter(
          (cart) => cart.id !== existingProduct.id
        );

        existingProduct.quantity = existingProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, existingProduct],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case actionTypes.MINS_CART:
      if (existingProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== existingProduct.id
        );
        existingProduct.quantity = existingProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, existingProduct],
        };
      }
      return {
        ...state,
        // cart: state.cart.filter((product) => product.id !== existingProduct.id),
      };

    case actionTypes.REMOVE_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== existingProduct.id),
      };
    }

    default:
      return state;
  }
};
