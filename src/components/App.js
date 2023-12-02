import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '#app/store';
import Routing from '#pages/Routing';
import '#app/index.css';

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <Routing />;
    </Provider>
  </HashRouter>
);
export default App;
