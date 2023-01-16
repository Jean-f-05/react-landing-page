import styled, { css } from 'styled-components';
import { Header as HeadingContainer } from '../Heading/styles';
import { Wrapper as TextComponent } from '../TextComponent/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  ${TextComponent}{
    margin-bottom: ${theme.spacing.huge};
  }
`}`;

export const Grid = styled.div`
  ${({ theme }) => css`
  counter-reset: grid-counter;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(28rem,1fr));
  gap:${theme.spacing.large}
`}`;

export const GridElement = styled.div`
  ${({ theme }) => css`
  ${HeadingContainer}{
    position: relative;
    left: 5rem;
  }
  ${HeadingContainer}:before{
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
  }
`}`;
