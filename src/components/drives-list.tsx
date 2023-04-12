'use client';

import { useRouter } from 'next/navigation';
import DrivesListItem from '@/components/drives-list-item';
import { DriveItem } from '@/types';

interface DrivesListItemProps {
  drives: DriveItem[];
}

export default function DrivesList({ drives }: DrivesListItemProps) {
  const router = useRouter();

  const onClickHandler = async (link: string) => {
    if (link) {
      await router.push(link);
    }
  };

  if (!drives.length) {
    return <div className="p-6">No drives found :(</div>;
  }

  return (
    <ul className="divide-y divide-gray-300">
      {drives.map((drive, index) => (
        <DrivesListItem
          drive={drive}
          key={index}
          onClick={() => onClickHandler(drive.link)}
        />
      ))}
    </ul>
  );
}
