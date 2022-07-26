import styled from 'styled-components';

import Icon from 'Components/Icon';

const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
    background-color: #f5eac3;
    padding: 13px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

    img {
        cursor: pointer;
    }
`;

const icons = [
    { name: 'vite', link: 'https://vitejs.dev/' },
    { name: 'typescript', link: 'https://www.typescriptlang.org/' },
    { name: 'styled-components', link: 'https://styled-components.com/' },
    { name: 'react-router', link: 'https://reactrouter.com/docs/en/v6' },
    { name: 'effector', link: 'https://effector.dev/' },
    { name: 'immer', link: 'https://immerjs.github.io/immer/' },
];

const IconList = () => {
    return (
        <Box>
            {icons.map(({ name, link }) => (
                <a key={name} href={link}>
                    <Icon src={`/icons/${name}.svg`} title={name} />
                </a>
            ))}
        </Box>
    );
};

export default IconList;
