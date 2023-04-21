import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Department, DriveType } from '@/types';
import { Session } from 'next-auth/src';

interface UseDriveFormProps {
  initialValues?: {
    firstName: string;
    lastName: string;
    driveType: DriveType;
    department: Department;
    driveLink: string;
    message: string;
  };
}

interface UseDriveFormResult {
  session: Session | null;
  firstName: string;
  lastName: string;
  driveType: DriveType;
  department: Department;
  driveLink: string;
  message: string;
  errors: { [key: string]: string };
  handleInputChange:
    | ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
      >
    | undefined;
  handleClearForm: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function useDriveForm({
  initialValues = {
    firstName: '',
    lastName: '',
    driveType: 'Internal',
    department: 'Software Engineering',
    driveLink: '',
    message: '',
  },
}: UseDriveFormProps): UseDriveFormResult {
  const { data: session } = useSession();

  const [firstName, setFirstName] = useState(initialValues.firstName || '');
  const [lastName, setLastName] = useState(initialValues.lastName || '');
  const [driveType, setDriveType] = useState<DriveType>(
    initialValues.driveType || 'Internal'
  );
  const [department, setDepartment] = useState<Department>(
    initialValues.department || 'Software Engineering'
  );
  const [driveLink, setDriveLink] = useState(initialValues.driveLink || '');
  const [message, setMessage] = useState(initialValues.message || '');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'first-name':
        setFirstName(value);
        setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
        break;
      case 'last-name':
        setLastName(value);
        setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
        break;
      case 'drive-link':
        setDriveLink(value);
        setErrors(prevErrors => ({ ...prevErrors, driveLink: '' }));
        break;
      case 'department':
        setDepartment(value as Department);
        setErrors(prevErrors => ({ ...prevErrors, department: '' }));
        break;
      case 'drive-type':
        setDriveType(value as DriveType);
        setErrors(prevErrors => ({ ...prevErrors, driveType: '' }));
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleClearForm = () => {
    setFirstName('');
    setLastName('');
    setDriveType('Internal');
    setDepartment('Software Engineering');
    setDriveLink('');
    setMessage('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!driveLink || !isValidURL(driveLink)) {
      newErrors.driveLink = 'Valid drive link is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    function isValidURL(str: string) {
      try {
        new URL(str);
        return true;
      } catch (error) {
        return false;
      }
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: session?.user?.email,
        subject: 'New drive to check',
        text: `Sender Full Name: ${session?.user?.name}\nSender Email: ${session?.user?.email}\nThe sender want to add ${firstName} ${lastName}'s Drive:\nDrive: ${driveLink}\nDepartment: ${department}\nDrive type: ${driveType}\nMessage: ${message}`,
      }),
    });

    const data = await response.json();

    handleClearForm();
    alert(data?.message);
  };

  return {
    session,
    firstName,
    lastName,
    driveType,
    department,
    driveLink,
    message,
    errors,
    handleInputChange,
    handleClearForm,
    handleSubmit,
  };
}
