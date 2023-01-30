import * as S from './styles';
import P from 'prop-types';
import Heading from '../Heading';

const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="large" isUpperCase>
      <S.Wrapper href={link}>
        {!!srcImg && <img src={srcImg} alt={text}></img>}
        {!srcImg && text}
      </S.Wrapper>
    </Heading>
  );
};

export default LogoLink;

LogoLink.propTypes = {
  text: P.string,
  srcImg: P.string,
  link: P.string,
};
