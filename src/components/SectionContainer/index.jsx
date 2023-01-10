import * as S from './styles';
import P from 'prop-types';

const SectionContainer = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default SectionContainer;

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
