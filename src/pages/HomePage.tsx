import styled from 'styled-components';

import Preview from 'Components/Preview';

const HomePageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const HomePage = () => (
    <HomePageStyled>
        <Preview />
    </HomePageStyled>
);

export default HomePage;
