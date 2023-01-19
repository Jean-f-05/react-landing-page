import { renderTheme } from '../../styles/renderTheme';
import Base from '.';
import { screen } from '@testing-library/react';
import { mockBase } from './mock';

describe('<Base/>', () => {
  it('should ', () => {
    const { container } = renderTheme(<Base {...mockBase}></Base>);
    expect(container).toMatchSnapshot();
  });
});
