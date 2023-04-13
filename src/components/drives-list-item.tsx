import { AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Avatar from '@/components/avatar';
import { DriveItem } from '@/types';
import { getDriveName, getDriveYear } from '@/helpers/string-utils';

interface DrivesListItemProps {
  drive: DriveItem;
  onClick: () => void;
}
export default function DrivesListItem({
  drive: { name, year },
  onClick,
}: DrivesListItemProps) {
  const driveName = getDriveName(name);
  const driveYear = getDriveYear(year);

  return (
    <li
      className="p-4 sm:p-6 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar name={name} />
          <div className="ml-2 sm:ml-4">
            <div className="text-sm sm:text-base">{driveName}</div>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <div className="flex items-center">
            <div className="flex items-start">
              <AcademicCapIcon className="text-gray-500 h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="text-gray-600 text-xs sm:text-sm">
                {driveYear}
              </span>
            </div>
          </div>
          <ChevronRightIcon className="text-gray-500 h-3 w-3 sm:h-4 sm:w-4 ml-10" />
        </div>
      </div>
    </li>
  );
}
