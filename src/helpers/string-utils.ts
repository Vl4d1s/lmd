import { Name, Year } from '@/types';

export const getInitials = (name: Name): string =>
  `${name.first.charAt(0)}${name.last?.charAt(0) || ''}`;

export const getDriveName = (name: Name): string =>
  `${name.first} ${name?.last || ''}`;

export const getDriveYear = (year?: Year): string =>
  year ? `${year.start} - ${year.end}` : '';
