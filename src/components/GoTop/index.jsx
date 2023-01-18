import * as S from './styles';
import P from 'prop-types';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

const GoTop = () => {
  return (
    <S.Wrapper href="#" aria-label="Go to top" title="Got to top">
      <KeyboardArrowUp />
    </S.Wrapper>
  );
};

export default GoTop;
