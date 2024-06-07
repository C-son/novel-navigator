import consts from '@/consts';
import Header from '@components/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('renders header', () => {
  render(<Header />);
  const headerElement = screen.getByText(consts.NAME);
  expect(headerElement).toBeInTheDocument();
});
