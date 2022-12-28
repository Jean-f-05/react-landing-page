import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme, color }) => css`
    background-color: ${theme.colors.mainBg};
    color:${color}
    `}  
`;
