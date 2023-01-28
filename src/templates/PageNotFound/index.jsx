import P from 'prop-types';
import GridContent from '../../components/GridContent';

const PageNotFound = () => {
  return (
    <GridContent
      title="ERROR 404"
      html="<p>The page you are looking for was not found!</p> <a href='/'>CLICK TO GO BACK</a>"
    />
  );
};

export default PageNotFound;
