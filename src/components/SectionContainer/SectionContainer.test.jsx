import { renderTheme } from '../../styles/renderTheme';
import SectionContainer from '.';
import { screen } from '@testing-library/react';

describe('<SectionContainer/>', () => {
  it('should ', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
