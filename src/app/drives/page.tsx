import { Suspense } from 'react';
import DrivesList from '@/components/drives-list';
import Loader from '@/components/loader';
import { getDrives } from '@/helpers/api-utils';
import googleDriveLogo from '@/assets/google-drive-logo.png';
import Image from 'next/image';

export const metadata = {
  title: 'lmd | Drives',
};

export default async function Page() {
  const drivesData = await getDrives();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row ">
          <div className="flex items-center mb-2 sm:mb-0">
            <Image
              alt="Image description"
              className="mr-2 h-8 w-8 sm:h-12 sm:w-12"
              src={googleDriveLogo}
            />
            <div>
              <h2 className="text-base sm:text-lg font-semibold">Drives</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                All external and internal drives are listed here.
              </p>
            </div>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <DrivesList drives={drivesData} />
        </Suspense>
      </div>
    </div>
  );
}
