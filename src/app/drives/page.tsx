import { Suspense } from 'react';
import DrivesList from '@/components/drives-list';
import Loader from '@/components/Loader';
import { getDrives } from '@/helpers/api-utils';

export const metadata = {
  title: 'lmd | Drives',
};

export default async function Page() {
  const drivesData = await getDrives();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">Drives</h2>
            <p className="text-gray-600">
              All external and internal drives are listed here.
            </p>
          </div>
          <form className="flex">
            <input
              className="border border-gray-400 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search"
              type="text"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <Suspense fallback={<Loader />}>
          <DrivesList drives={drivesData} />
        </Suspense>
      </div>
    </div>
  );
}
