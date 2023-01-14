import { renderTheme } from '../../styles/renderTheme';
import GridContent from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridContent/>', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock}></GridContent>);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined}></GridContent>,
    );
    expect(container).toMatchSnapshot();
  });
});
