import { renderTheme } from '../../styles/renderTheme';
import SectionBackground from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground/>', () => {
  it('should render with background color dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background color light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
