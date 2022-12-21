import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { productReducer } from './reducer/productReducer';

export const store = createStore(productReducer, composeWithDevTools());
