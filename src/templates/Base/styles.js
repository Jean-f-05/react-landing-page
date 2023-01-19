import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  padding-top: 5.4rem;

  @media ${theme.media.upToMedium} {
    padding-top: 0 ;
  }
`}`;
