import * as S from './styles';
import P from 'prop-types';

const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  isUpperCase = false,
}) => {
  return (
    <S.Header
      colorDark={colorDark}
      as={as}
      size={size}
      isUpperCase={isUpperCase}
    >
      {children}
    </S.Header>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'large', 'huge']),
  isUpperCase: P.bool,
};
export default Heading;
