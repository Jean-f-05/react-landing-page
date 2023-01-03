import * as S from './styles';
import P from 'prop-types';

const TextComponent = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default TextComponent;

TextComponent.propTypes = {
  children: P.node.isRequired,
};
