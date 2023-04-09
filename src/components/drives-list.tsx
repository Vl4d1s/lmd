import React from 'react';
import DrivesListItem from '@/components/drives-list-item';

export default function DrivesList() {
  const drives = [
    {
      id: '1',
      firstName: 'Vladis',
      lastName: 'Markin',
      year: '2022',
      type: 'External',
      link: 'https://google.com',
    },
  ];
  return (
    <ul className="divide-y divide-gray-300">
      {drives.map(drive => (
        <DrivesListItem
          firstName={drive.firstName}
          id={drive.id}
          key={drive.id}
          lastName={drive.lastName}
          type={drive.type}
          year={drive.year}
        />
      ))}
    </ul>
  );
}
