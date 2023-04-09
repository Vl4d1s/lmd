import Image from 'next/image';
import React from 'react';

export default function Avatar({
  firstName,
  lastName,
  image,
}: {
  firstName: string;
  lastName: string;
  image?: string;
}) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 mr-4">
      {image ? (
        <Image
          alt="Avatar"
          className="w-full h-full rounded-full object-cover"
          height={40}
          src={image}
          width={40}
        />
      ) : (
        <span className="text-xl font-bold text-gray-600">{initials}</span>
      )}
    </div>
  );
}
