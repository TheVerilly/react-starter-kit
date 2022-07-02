import styled from 'styled-components';

const Page404Styled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 2em;
    word-spacing: 10px;
`;

const Page404 = () => (
    <Page404Styled>
        <h1>page not found</h1>
    </Page404Styled>
);

export default Page404;
