import * as S from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Wrapper>
        <Heading isUpperCase size="huge" colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Wrapper>
    </SectionBackground>
  );
};

export default GridText;

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
