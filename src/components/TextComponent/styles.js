import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
    ${({ theme }) => css`
    font-size: ${theme.fonts.medium};
`}`;
