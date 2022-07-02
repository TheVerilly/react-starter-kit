import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'Models/init';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
