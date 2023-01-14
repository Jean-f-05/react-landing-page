import * as S from './styles';
import P from 'prop-types';
import SectionContainer from '../SectionContainer';

const SectionBackground = ({ children, background = false }) => {
  return (
    <S.Wrapper background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Wrapper>
  );
};

export default SectionBackground;

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
