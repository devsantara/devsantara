import { render, screen } from '@testing-library/react';
import Link from 'next/link';
import { Img } from './Img';

describe('Img component', () => {
  it('should render component correctly', () => {
    render(
      <Img
        src="/brand/devsantara-logo.svg"
        alt="devsantara"
        className="h-9 w-9"
      />
    );

    const image = screen.getByRole('img', { name: 'devsantara' });
    expect(image).toBeInTheDocument();
  });

  it('should render component without anchor tag when not href', () => {
    render(
      <Img
        src="/brand/devsantara-logo.svg"
        alt="devsantara"
        className="h-9 w-9"
      />
    );
    const image = screen.getByRole('img', { name: 'devsantara' });
    expect(image.parentElement?.parentElement).not.toHaveAttribute('href');
  });

  it('should render component with anchor tag when have href', () => {
    render(
      <Img
        src="/brand/devsantara-logo.svg"
        alt="devsantara"
        className="h-9 w-9"
        href="/test"
      />
    );
    const image = screen.getByRole('img', { name: 'devsantara' });
    expect(image.parentElement?.parentElement).toHaveAttribute('href', '/test');
  });
});
