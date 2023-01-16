import * as S from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridImage = ({ background = false, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <S.Wrapper>
        <Heading isUpperCase size="huge" colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={el.altText}>
              <S.Image src={el.src} alt={el.altText} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Wrapper>
    </SectionBackground>
  );
};

export default GridImage;

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      src: P.string.isRequired,
    }),
  ).isRequired,
};
