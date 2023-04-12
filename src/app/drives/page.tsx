import { Suspense } from 'react';
import DrivesList from '@/components/drives-list';
import Loader from '@/components/Loader';
import { getDrives } from '@/helpers/api-utils';

export const metadata = {
  title: 'lmd | Drives',
};

export default async function Page() {
  const drivesData = getDrives();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Drives</h2>
          <p className="text-gray-600">
            All external and internal drives are listed here.
          </p>
        </div>
        <Suspense fallback={<Loader />}>
          {/* @ts-ignore */}
          <DrivesList promise={drivesData} />
        </Suspense>
      </div>
    </div>
  );
}
