import { renderTheme } from '../../styles/renderTheme';
import Heading from './index';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading/>', () => {
  it('should render Heading with default values', () => {
    renderTheme(<Heading>hello</Heading>);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      fontSize: theme.fonts.xhuge,
      textTransform: 'none',
    });
  });

  it('should render Heading with color white', () => {
    renderTheme(<Heading colorDark={false}>hello</Heading>);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render Heading with correct sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">hello</Heading>);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });
    expect(heading).toHaveStyle({
      fontSize: theme.fonts.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">hello</Heading>
      </ThemeProvider>,
    );
    expect(
      screen.getByRole('heading', {
        name: /hello/i,
      }),
    ).toHaveStyle({
      fontSize: theme.fonts.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">hello</Heading>
      </ThemeProvider>,
    );
    expect(
      screen.getByRole('heading', {
        name: /hello/i,
      }),
    ).toHaveStyle({
      fontSize: theme.fonts.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">hello</Heading>
      </ThemeProvider>,
    );
    expect(
      screen.getByRole('heading', {
        name: /hello/i,
      }),
    ).toHaveStyle({
      fontSize: theme.fonts.xhuge,
    });
  });

  it('should render correct size when mobile', () => {
    renderTheme(<Heading size="huge">hello</Heading>);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.xlarge, {
      media: theme.media.upToMedium,
    });
  });

  it('should render the right element', () => {
    const { container } = renderTheme(<Heading as="h6">hello</Heading>);

    const h6 = container.firstChild;
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
