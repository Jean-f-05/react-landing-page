import * as S from './styles';
import P from 'prop-types';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';

const Footer = ({ html }) => {
  return (
    <S.Wrapper>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </S.Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  html: P.string.isRequired,
};
