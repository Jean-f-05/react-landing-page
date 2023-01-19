import linksMock from '../../components/NavLinks/mock';
import GridText from '../../components/GridText';
import GridMock from '../../components/GridText/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} background />
      <GridText {...GridMock} />
      <GridText {...GridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
};
