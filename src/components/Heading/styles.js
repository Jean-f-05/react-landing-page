import styled, { css } from 'styled-components';

export const Header = styled.h1`
    color: ${({ theme, light }) =>
      css` ${light ? theme.colors.white : theme.colors.primaryColor}`}`;
