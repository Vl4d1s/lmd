import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Avatar from '@/components/avatar';
import { DriveItem } from '@/types';
import { getDriveName } from '@/helpers/string-utils';
import Year from '@/components/drives-list-item/year/Year';

interface DrivesListItemProps {
  drive: DriveItem;
  onClick: () => void;
}
export default function DrivesListItem({
  drive: { name, year, image },
  onClick,
}: DrivesListItemProps) {
  const driveName = getDriveName(name);

  return (
    <li
      className="p-4 sm:p-6 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar image={image} name={name} />
          <div className="ml-2 sm:ml-4">
            <div className="text-sm sm:text-base">{driveName}</div>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <Year year={year} />
          <ChevronRightIcon className="text-gray-500 h-3 w-3 sm:h-4 sm:w-4 ml-4 sm:ml-4" />
        </div>
      </div>
    </li>
  );
}
