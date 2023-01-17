import { renderTheme } from '../../styles/renderTheme';
import Footer from '.';
import { screen } from '@testing-library/react';

describe('<Footer/>', () => {
  it('should render element', () => {
    renderTheme(<Footer html={'<h1>HELLO</h1>'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should match the snapshot', () => {
    const { container } = renderTheme(<Footer html={'<h1>HELLO</h1>'} />);
    expect(container).toMatchSnapshot();
  });
});
