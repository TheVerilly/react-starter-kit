import { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.div`
    display: flex;
    gap: 20px;
    padding: 5px;
`;

const StyledLink = styled(NavLink)`
    font-size: 1.3em;

    &.active {
        color: #383838;
    }
`;

const Header: FC = () => {
    return (
        <HeaderStyled>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/info">Info</StyledLink>
        </HeaderStyled>
    );
};

export default Header;
