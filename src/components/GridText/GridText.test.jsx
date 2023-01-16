import { renderTheme } from '../../styles/renderTheme';
import GridText from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridText/>', () => {
  it('should render with background ', () => {
    const { container } = renderTheme(<GridText {...mock}></GridText>);
    expect(container).toMatchSnapshot();
  });

  it('should render without background ', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined}></GridText>,
    );
    expect(container).toMatchSnapshot();
  });
});
