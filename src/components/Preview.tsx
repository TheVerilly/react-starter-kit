import styled from 'styled-components';

const PreviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 1.7em;
`;

const Preview = () => (
    <PreviewStyled>
        <img width={500} height={500} src="public/ukraine-flag.png" alt="ukraine-flag" />
        <h1>Hello world</h1>
    </PreviewStyled>
);

export default Preview;
