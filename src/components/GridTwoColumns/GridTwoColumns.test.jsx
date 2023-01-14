import { renderTheme } from '../../styles/renderTheme';
import GridTwoColumns from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridTwoColumns/>', () => {
  it('should render grid with two columns', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
