import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders heading', () => {
    render(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
