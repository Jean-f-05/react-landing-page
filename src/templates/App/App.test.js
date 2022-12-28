import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import Home from '.';

test('renders learn react link', () => {
  renderTheme(<Home />);
  screen.logTestingPlaygroundURL();

  const headingContainer = screen.getByRole('heading', {
    name: /hello/i,
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    backgroundColor: theme.colors.mainBg,
  });

  expect(headingContainer).toMatchSnapshot();
});
