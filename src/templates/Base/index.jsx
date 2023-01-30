import * as S from './styles';
import P from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';

const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <S.Wrapper>
        {children}
        <Footer footerHtml={footerHtml} />
      </S.Wrapper>
      <GoTop />
    </>
  );
};

export default Base;

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
