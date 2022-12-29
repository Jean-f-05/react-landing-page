import styled, { css } from 'styled-components';

const changeBg = (color, theme) => css`
    background-color: ${color};
    color:${() => theme.colors.white};
`;

export const Wrapper = styled.div`
    ${({ color, theme }) => css`
        color: ${color};
        background-color: ${theme.colors.mainBg};
       ${changeBg(color, theme)}
`}  

    font-size: ${({ theme }) => theme.fonts.regular}
`;
