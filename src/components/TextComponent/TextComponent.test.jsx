import { renderTheme } from '../../styles/renderTheme';
import TextComponent from '.';
import { screen } from '@testing-library/react';

describe('<TextComponent/>', () => {
  it('should render text', () => {
    renderTheme(<TextComponent>Hello</TextComponent>);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Hello</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
