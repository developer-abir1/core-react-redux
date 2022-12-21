import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToastContainer>
          <RouterProvider router={router} />
        </ToastContainer>
      </Provider>
    </div>
  );
}

export default App;
