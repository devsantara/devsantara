import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should render link button when provide href attribute', () => {
    render(<Button href="/test">Button</Button>);

    const button = screen.getByRole('link', { name: 'Button' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href');
  });

  it('should render button when not provide href attribute', () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute('href');
  });

  it('should execute event when event is trigger', () => {
    let state = 0;
    const handleClick = jest.fn();
    handleClick.mockImplementation(() => {
      state += 1;
    });

    render(<Button onClick={handleClick}>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });
    fireEvent.click(button);

    expect(handleClick).toBeCalled();
    expect(state).toEqual(1);
  });
});
