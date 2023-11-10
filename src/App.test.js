import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText("Hello from V2");
  expect(headerElement).toBeInTheDocument();
});
