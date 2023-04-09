import { AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Avatar from '@/components/avatar';

interface DrivesListItemProps {
  firstName: string;
  lastName: string;
  year: string;
  type: string;
  id: string;
}
export default function DrivesListItem({
  firstName,
  lastName,
  year,
  type,
}: DrivesListItemProps) {
  return (
    <li className="p-6 hover:bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar firstName={'Vladis'} lastName={'Markin'} />
          <div>
            <div className="text-indigo-500">{`${firstName} ${lastName}`}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex items-center text-gray-600 mt-1 ">
              <AcademicCapIcon className="text-gray-500 h-5 w-5 mr-2" />
              <span>{year}</span>
            </div>
            <span className="text-gray-700 text-sm">{`${type} Drive`}</span>
          </div>
        </div>
        <ChevronRightIcon className="text-gray-500  h-4 w-4" />
      </div>
    </li>
  );
}
