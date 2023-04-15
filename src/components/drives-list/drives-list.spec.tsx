import React from 'react';
import { render, screen } from '@testing-library/react';
import DrivesListItem from '../drives-list-item/drives-list-item';
import { DriveItem } from '@/types';

describe('DrivesListItem', () => {
  const mockDriveList: DriveItem[] = [
    {
      id: '1',
      name: {
        first: 'Vladis',
        last: 'Markin',
      },
      year: {
        start: '2017',
        end: '2021',
      },
      department: 'Software Engineering',
      type: 'External',
      link: '/drive1',
      description: 'This is a description of Drive 1.',
    },
  ];

  it('renders the drive name and avatar correctly', () => {
    render(
      <DrivesListItem drive={mockDriveList[0]} onClick={() => jest.fn()} />
    );
    expect(screen.getByText(/Vladis Markin/i)).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders the drive year and chevron icon correctly', () => {
    render(
      <DrivesListItem drive={mockDriveList[0]} onClick={() => jest.fn()} />
    );
    expect(screen.getByText(/2017 - 2021/i)).toBeInTheDocument();
    expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
  });
});
