import * as S from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Wrapper>
        <Heading isUpperCase colorDark={!background}>
          {title}
        </Heading>
        <S.Html>
          <TextComponent>{html}</TextComponent>
        </S.Html>
      </S.Wrapper>
    </SectionBackground>
  );
};

export default GridContent;

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
