import './index.css';
import './services/firebase.ts';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { configureAppStore } from './store/configureStore.ts';
const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
