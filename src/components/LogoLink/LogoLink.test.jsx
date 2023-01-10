import { renderTheme } from '../../styles/renderTheme';
import LogoLink from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World"></LogoLink>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render img logo', () => {
    renderTheme(
      <LogoLink
        link="#target"
        text="Hello World"
        srcImg="Image.jpg"
      ></LogoLink>,
    );

    const img = screen.getByRole('img', {
      name: /hello world/i,
    });
    expect(img).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <LogoLink
        link="#target"
        text="Hello World"
        srcImg="Image.jpg"
      ></LogoLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
