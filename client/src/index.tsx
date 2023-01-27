import * as ReactDOM from 'react-dom/client';
import  App  from './pages/App';
import './pages/style.css';

const container = document.querySelector('#app');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
       
            <App />
       
    );
} else {
    console.error('App not found');
}
