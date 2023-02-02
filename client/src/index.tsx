import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import './components/style.css';
import UserStore from './store/userStore';

const container = document.querySelector('#app');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error('App not found');
}
