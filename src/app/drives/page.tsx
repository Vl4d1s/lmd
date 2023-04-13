import { Suspense } from 'react';
import DrivesList from '@/components/drives-list';
import Loader from '@/components/loader';
import { getDrives } from '@/helpers/api-utils';

export const metadata = {
  title: 'lmd | Drives',
};

export default async function Page() {
  const drivesData = await getDrives();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Drives</h2>
            <p className="text-gray-600">
              All external and internal drives are listed here.
            </p>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <DrivesList drives={drivesData} />
        </Suspense>
      </div>
    </div>
  );
}
