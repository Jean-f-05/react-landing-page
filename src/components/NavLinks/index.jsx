import * as S from './styles';
import P from 'prop-types';
import MenuLink from '../MenuLink';

const NavLinks = ({ links = [] }) => {
  return (
    <S.Wrapper>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </S.Wrapper>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
