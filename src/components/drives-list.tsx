'use client';

import { useRouter } from 'next/navigation';
import DrivesListItem from '@/components/drives-list-item';
import { DriveItem } from '@/types';

interface DrivesListItemProps {
  promise: Promise<DriveItem[]>;
}

export default async function DrivesList({ promise }: DrivesListItemProps) {
  const router = useRouter();

  // Wait for the drives promise to resolve
  const drives = await promise;

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
