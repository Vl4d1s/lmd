import { getDriveYear } from '@/helpers/string-utils';
import type { Year } from '@/types';

export default function Year({ year }: { year?: Year }) {
  if (!year) {
    return null;
  }

  const driveYear = getDriveYear(year);

  return (
    <div className="flex items-center">
      <div className="flex items-start">
        <span className="text-gray-600 text-xs sm:text-sm">{driveYear}</span>
      </div>
    </div>
  );
}
