import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
    ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.small};
    padding: ${theme.spacing.small};
    color:${theme.colors.primaryColor};
    position: relative;
  

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left:50%;
        background-color: ${theme.colors.secondaryColor};
        height: 0.2rem;
        width: 0;
        transition: all 300ms ease-in-out;
          }

    &:hover::after {
        left:25%;
        width:50%;
    }
`}`;
