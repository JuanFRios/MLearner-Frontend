import 'styles/globals.css';
import Router from 'routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
