import styled, { css } from 'styled-components';
import { Header as HeadingContainer } from '../Heading/styles';
import { Wrapper as TextComponent } from '../TextComponent/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  & > ${TextComponent}{
    margin-bottom: ${theme.spacing.huge};
  }
`}`;

export const Grid = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(28rem,1fr));
  gap:${theme.spacing.large}
`}`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
`}`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(15deg);
    }
`}`;
