import { renderTheme } from '../../styles/renderTheme';
import NavLinks from '.';
import { screen } from '@testing-library/react';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks', () => {
  it('should render links ', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links ', () => {
    renderTheme(<NavLinks></NavLinks>);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should ... ', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(screen.getByText(/Link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      { media: theme.media.upToMedium },
    );
  });

  it('should match snapshot ', () => {
    const { container } = renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(container).toMatchSnapshot();
  });
});
