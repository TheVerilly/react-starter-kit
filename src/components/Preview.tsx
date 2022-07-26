import styled, { keyframes } from 'styled-components';

import Icon from 'Components/Icon';
import StackIcons from 'Components/StackIcons';

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const PreviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 10px;
`;

const Text = styled.h1`
    font-size: 1.7em;
    text-align: center;
    line-height: 1.7em;
    letter-spacing: 1px;
`;

const ReactIcon = styled(Icon)`
    margin-bottom: 30px;
    animation-name: ${rotateAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const Plus = styled.span`
    color: #f7b733;
`;

const Preview = () => (
    <PreviewStyled>
        <ReactIcon width={240} height={240} src="/icons/react.svg" />
        <StackIcons />
        <Text>
            Vite - next generation frontend tooling with <b>typescript</b>
        </Text>
        <Text>
            React <Plus>+</Plus> React Router <Plus>+</Plus> React Hook Form <Plus>+</Plus> Effector with Immer
        </Text>
        <Text>Styled Components - css in JS with the best DX</Text>
        <Text>Eslint and Prettier - to keep the code consistent</Text>
    </PreviewStyled>
);

export default Preview;
