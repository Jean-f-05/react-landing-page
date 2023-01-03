import { renderTheme } from '../../styles/renderTheme';
import MenuLink from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">children</MenuLink>);

    expect(
      screen.getByRole('link', {
        name: /children/i,
      }),
    ).toHaveAttribute('target', 'self');
  });

  it('should redirect to new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        children
      </MenuLink>,
    );

    expect(
      screen.getByRole('link', {
        name: /children/i,
      }),
    ).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        children
      </MenuLink>,
    );

    expect(
      screen.getByRole('link', {
        name: /children/i,
      }),
    ).toMatchSnapshot();
  });
});
