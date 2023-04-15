import React from 'react';
import { render, screen } from '@testing-library/react';
import Year from './Year';
import { Year as YearType } from '@/types';

describe('Year', () => {
  it('renders the year correctly when a year is passed', () => {
    const mockYear: YearType = {
      start: '2022',
      end: '2024',
    };
    render(<Year year={mockYear} />);
    expect(screen.getByText(/2022 - 2024/i)).toBeInTheDocument();
  });

  it('returns null when no year is passed', () => {
    render(<Year />);
    expect(screen.queryByText(/20/i)).toBeNull();
  });
});
