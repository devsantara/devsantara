import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  it('should render Title component correctly', () => {
    render(<Title>title</Title>);

    const title = screen.getByText(/title/i);

    expect(title).toBeInTheDocument();
  });
});
