import { renderTheme } from '../../styles/renderTheme';
import GridImage from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridImage/>', () => {
  it('should render with background ', () => {
    const { container } = renderTheme(<GridImage {...mock}></GridImage>);
    expect(container).toMatchSnapshot();
  });

  it('should render without background ', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined}></GridImage>,
    );
    expect(container).toMatchSnapshot();
  });
});
