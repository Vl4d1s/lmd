import React from 'react';

export const metadata = {
  title: 'lmd | Add Your Drive',
};

export default function page() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Add Your Drive</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="text-lg font-medium my-4">
          While I am working on enabling logged-in users to add their drive to
          the list on this page, you can get in touch with me via{' '}
          <a
            className="hover:text-blue-600 text-blue-500"
            href="https://www.linkedin.com/in/vladismarkin/"
          >
            LinkedIn
          </a>{' '}
          or send an email to{' '}
          <a
            className="hover:text-blue-600 text-blue-500"
            href="mailto:vladismarkin@gmail.com"
          >
            vladismarkin@gmail.com
          </a>{' '}
          if you would like to have your drive added to the list.
        </p>
      </div>
    </div>
  );
}
