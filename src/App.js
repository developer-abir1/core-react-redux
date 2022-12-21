import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
