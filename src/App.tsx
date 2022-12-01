import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'Components/Header';

import HomePage from 'Pages/HomePage';
import Page404 from 'Pages/404Page';

import { ROOT } from 'Routes/index';

const AppStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`;

const App = () => (
    <AppStyled>
        <Header />
        <Routes>
            <Route path={ROOT} element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </AppStyled>
);

export default App;
