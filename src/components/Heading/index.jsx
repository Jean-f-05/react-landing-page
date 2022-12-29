import * as S from './styles';
import P from 'prop-types';

const Heading = ({ children, light = false }) => {
  return <S.Header light={light}>{children}</S.Header>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
export default Heading;
