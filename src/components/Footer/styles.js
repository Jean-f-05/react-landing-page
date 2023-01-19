import styled, { css } from 'styled-components';
import { Wrapper as FooterElement } from '../../components/TextComponent/styles';
import { Wrapper as SectionContainer } from '../../components/SectionContainer/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  text-align: center;
  border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration:none;
      font-size: ${theme.fonts.small};
      }

  & ${FooterElement} {
    font-size: ${theme.fonts.small};
}

  & ${SectionContainer}{
      padding-top: 0;
      padding-bottom: 0;
  }
`}`;
