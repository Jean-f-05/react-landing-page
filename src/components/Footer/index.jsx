import * as S from './styles';
import P from 'prop-types';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';

const Footer = ({ footerHtml }) => {
  return (
    <S.Wrapper>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </S.Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
