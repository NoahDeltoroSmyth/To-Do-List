import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign in', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
