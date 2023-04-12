import { AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Avatar from '@/components/avatar';
import { DriveItem } from '@/types';
import { getDriveName, getDriveYear } from '@/helpers/string-utils';

interface DrivesListItemProps {
  drive: DriveItem;
  onClick: () => void;
}
export default function DrivesListItem({
  drive: { name, year, type },
  onClick,
}: DrivesListItemProps) {
  const driveName = getDriveName(name);
  const driveYear = getDriveYear(year);

  return (
    <li className="p-6 hover:bg-gray-100 cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar name={name} />
          <div>
            <div>{driveName}</div>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <div>
            <div className="flex items-center text-gray-600 mt-1">
              <AcademicCapIcon className="text-gray-500 h-5 w-5 mr-2" />
              <span>{driveYear}</span>
            </div>
            <span className="text-gray-700 text-sm">{`${type} Drive`}</span>
          </div>
          <ChevronRightIcon className="text-gray-500 h-4 w-4 ml-12" />
        </div>
      </div>
    </li>
  );
}
