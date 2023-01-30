import * as S from './styles';
import P from 'prop-types';
import SectionContainer from '../SectionContainer';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  const id = sectionId ? sectionId : random();
  return (
    <S.Wrapper background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </S.Wrapper>
  );
};

export default SectionBackground;

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.bool,
};
