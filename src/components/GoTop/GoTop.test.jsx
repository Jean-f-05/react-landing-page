import { renderTheme } from '../../styles/renderTheme';
import GoTop from '.';
import { screen } from '@testing-library/react';

describe('<GoTop/>', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop></GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
