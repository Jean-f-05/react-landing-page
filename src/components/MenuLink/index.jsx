import * as S from './styles';
import P from 'prop-types';

const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : 'self';

  return (
    <S.Wrapper href={link} target={target}>
      {children}
    </S.Wrapper>
  );
};

export default MenuLink;

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.node.isRequired,
  newTab: P.bool,
};
