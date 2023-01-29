import { createContext } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import './components/style.css';
import UserStore from './store/userStore';
interface IAppContext {
  user: UserStore;
}

export const AppContext = createContext<IAppContext | null>(null);
const API_URL = process.env.REACT_APP_API_URL;
console.log('api', API_URL);

const container = document.querySelector('#app');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <AppContext.Provider value={{ user: new UserStore() }}>
      <App />
    </AppContext.Provider>
  );
} else {
  console.error('App not found');
}
