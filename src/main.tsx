import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/reset.css';
import './assets/css/index.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
