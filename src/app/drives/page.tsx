import React from 'react';
import DrivesList from '@/components/drives-list';

export const metadata = {
  title: 'lmd | Drives',
};
export default function Drives() {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Drives</h2>
          <p className="text-gray-600">
            All external and internal drives are listed here.
          </p>
        </div>
        <DrivesList />
      </div>
    </div>
  );
}
