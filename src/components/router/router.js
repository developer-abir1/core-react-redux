import { createBrowserRouter } from 'react-router-dom';
import About from '../../pages/About';
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Layout from '../Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);
