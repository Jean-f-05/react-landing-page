import * as S from './styles';

import { useEffect, useState, useRef } from 'react';

import { mapData } from '../../api/map-data';

import { mockBase } from '../Base/mock';
import Base from '../Base/';
import PageNotFound from '../PageNotFound';
import Loading from '../Loading';
import GridTwoColumns from '../../components/GridTwoColumns';
import GridContent from '../../components/GridContent';
import GridText from '../../components/GridText';
import GridImage from '../../components/GridImage';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/pages/?filters=[slug]=take-a-load-at-my-page&populate[sections][populate]=*',
      );
      const json = await data.json();
      const { attributes } = json.data[0];
      const pageData = mapData([attributes]);
      setData(() => pageData[0]);
    };

    if (isMounted.current === true) {
      load();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={(text, link, srcImg)}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns {...section} key={key} />;
        }
        if (component === 'section.section-two-content') {
          return <GridContent {...section} key={key} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}

export default Home;
