import * as S from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Wrapper background={background}>
        <S.TextWrapper>
          <Heading isUpperCase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image src={srcImg} alt="title"></S.Image>
        </S.ImageWrapper>
      </S.Wrapper>
    </SectionBackground>
  );
};

export default GridTwoColumns;

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
