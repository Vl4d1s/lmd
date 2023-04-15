'use client';

import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center">
        <Image
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
          src={session.user.image}
        />
        <p className="text-sm font-medium text-gray-900">{session.user.name}</p>
        <button
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out ml-4"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <button
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      onClick={() => signIn()}
    >
      Log In
    </button>
  );
}
