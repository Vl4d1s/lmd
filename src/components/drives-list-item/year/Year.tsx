import { getDriveYear } from '@/helpers/string-utils';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Year } from '@/types';

export default function Year({ year }: { year?: Year }) {
  if (!year) {
    return null;
  }

  const driveYear = getDriveYear(year);

  return (
    <div className="flex items-center">
      <div className="flex items-start">
        <AcademicCapIcon className="text-gray-500 h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
        <span className="text-gray-600 text-xs sm:text-sm">{driveYear}</span>
      </div>
    </div>
  );
}
