import * as S from './styles';
import P from 'prop-types';

const TextComponent = ({ children }) => {
  return <S.Wrapper dangerouslySetInnerHTML={{ __html: children }} />;
};

export default TextComponent;

TextComponent.propTypes = {
  children: P.node.isRequired,
};
