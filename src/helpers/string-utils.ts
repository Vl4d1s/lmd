import { Name, Year } from '@/types';

export const getInitials = (name: Name): string =>
  `${name?.first?.charAt(0).toUpperCase()}${
    name?.last?.charAt(0) || name?.first?.charAt(1).toUpperCase()
  }`;

export const getDriveName = (name: Name): string =>
  `${name?.first} ${name?.last || ''}`;

export const getDriveYear = (year?: Year): string =>
  year ? `${year.start} - ${year.end}` : '';
