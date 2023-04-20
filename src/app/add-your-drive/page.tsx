'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Department, DriveType } from '@/types';

export default function Example() {
  const { data: session } = useSession();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [driveType, setDriveType] = useState<DriveType>('Internal');
  const [department, setDepartment] = useState<Department>(
    'Software Engineering'
  );
  const [driveLink, setDriveLink] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: any) => {
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
        text: `${firstName} ${lastName} want to add:\nDrive: ${driveLink}\nDepartment: ${department}\nDrive type: ${driveType}\nMessage: ${message}`,
      }),
    });

    const data = await response.json();
    console.log(data);

    handleClearForm();
    alert(data?.message);
  };

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
    setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
    setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
  };

  const handleDriveTypeChange = (event: any) => {
    setDriveType(event.target.value);
  };

  const handleDepartmentChange = (event: any) => {
    setDepartment(event.target.value);
  };

  const handleDriveLinkChange = (event: any) => {
    setDriveLink(event.target.value);
    setErrors(prevErrors => ({ ...prevErrors, driveLink: '' }));
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClearForm = () => {
    setFirstName('');
    setLastName('');
    setDriveType('Internal');
    setDepartment('Software Engineering');
    setDriveLink('');
    setMessage('');
  };

  if (!session?.user) {
    return (
      <div className="flex justify-center my-8">
        <p className="text-center">
          You should be logged in to be able to add your drive.{' '}
        </p>
      </div>
    );
  }

  return (
    <div className="flex mx-auto max-w-lg mt-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please provide some information about your drive.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="first-name"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="given-name"
                      className={`${
                        errors.firstName ? 'border-red-500' : ''
                      } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                      id="first-name"
                      name="first-name"
                      onChange={handleFirstNameChange}
                      type="text"
                      value={firstName}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="last-name"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="family-name"
                      className={`${
                        errors.lastName ? 'border-red-500' : ''
                      } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                      id="last-name"
                      name="last-name"
                      onChange={handleLastNameChange}
                      type="text"
                      value={lastName}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="drive-type"
                  >
                    Drive Type
                  </label>
                  <div className="mt-2">
                    <select
                      autoComplete="drive-type"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      id="drive-type"
                      name="drive-type"
                      onChange={handleDriveTypeChange}
                      value={driveType}
                    >
                      <option value="Internal">Internal</option>
                      <option value="External">External</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <div className="mt-2">
                    <select
                      autoComplete="department"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      id="department"
                      name="department"
                      onChange={handleDepartmentChange}
                      value={department}
                    >
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="drive-link"
                  >
                    Drive Link
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="drive-link"
                      className={`${
                        errors.driveLink ? 'border-red-500' : ''
                      } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                      id="drive-link"
                      name="drive-link"
                      onChange={handleDriveLinkChange}
                      type="text"
                      value={driveLink}
                    />
                    {errors.driveLink && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.driveLink}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="drive-link"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      autoComplete="message"
                      className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id="message"
                      name="message"
                      onChange={event => {
                        const value = event.target.value.slice(0, 250);
                        handleMessageChange({ target: { value } });
                      }}
                      value={message}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleClearForm}
              type="button"
            >
              Clear
            </button>
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
