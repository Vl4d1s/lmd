export type Name = {
  first: string;
  last?: string;
};

export type Year = {
  start: string;
  end: string;
};

export type DriveItem = {
  id: string;
  year?: Year;
  name: Name;
  department: Department;
  type: DriveType;
  link: string;
  image?: string;
  description?: string;
};

export type Department =
  | 'Software Engineering'
  | 'Electrical Engineering'
  | 'Mechanical Engineering';

export type DriveType = 'Internal' | 'External';
