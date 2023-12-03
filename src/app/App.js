import { Provider } from 'react-redux';
import { store } from '#app/store';
import Routing from '#app/Routing';
import '#app/index.css';

const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);
export default App;
