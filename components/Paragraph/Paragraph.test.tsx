import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('Paragraph component', () => {
  it('should render Paragraph component correctly', () => {
    render(<Paragraph>paragraph</Paragraph>);

    const paragraph = screen.getByText(/paragraph/i);

    expect(paragraph).toBeInTheDocument();
  });
});
