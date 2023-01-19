import * as S from './styles';
import { mockBase } from '../Base/mock';
import Base from '../Base/';

function Home() {
  return (
    <S.Wrapper>
      <Base {...mockBase} />
    </S.Wrapper>
  );
}

export default Home;
