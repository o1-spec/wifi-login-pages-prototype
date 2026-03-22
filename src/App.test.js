import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/OpenWISP WiFi Login Pages - GSoC Prototype/i);
  expect(headingElement).toBeInTheDocument();
});
