import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
import Page404 from 'Pages/404Page';

import { ROOT } from 'Routes/index';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROOT} element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

export default App;
