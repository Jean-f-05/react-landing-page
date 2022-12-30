import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.large};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.xhuge};
    ${mediaFont(theme)}
  `,
};

const titleCase = (isUpperCase) => css`
text-transform: ${isUpperCase ? 'uppercase' : 'none'}`;

const mediaFont = (theme) => css`
  @media ${theme.media.upToMedium} {
    font-size: ${theme.fonts.xlarge};
  }
`;

export const Header = styled.h1`
  ${({ theme, colorDark, size, isUpperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(isUpperCase)};
  `}
`;
