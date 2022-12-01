import styled from 'styled-components';

import Preview from 'Components/Preview';

const HomePageStyled = styled.div`
    width: 100%;
    height: 100%;
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
