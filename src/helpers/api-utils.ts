import { DriveItem } from '@/types';

export const fetchDrives = async (): Promise<A> => {
  const res = await fetch(
    'https://lmd-drives-default-rtdb.firebaseio.com/drives.json'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

type A = {
  [id: string]: Omit<DriveItem, 'id'>;
};

export const mapDrives = (data: A): DriveItem[] => {
  return Object.entries(data).map(([id, drive]) => {
    return {
      id,
      ...drive,
    };
  });
};

const sortDriveByYear = (list: DriveItem[]): DriveItem[] => {
  return list.sort((a, b) => {
    if (!a?.year) {
      return 1;
    } else if (!b.year) {
      return -1;
    }
    return Number(a.year.start) - Number(b.year.start);
  });
};

export const getDrives = async () =>
  sortDriveByYear(mapDrives(await fetchDrives()));
