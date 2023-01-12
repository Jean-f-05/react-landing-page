import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
    ${({ theme }) => css`
    background-color: transparent;
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.upToMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
    `}
`;
