import Image from 'next/image';
import { Name } from '@/types';
import { getInitials } from '@/helpers/string-utils';

export default function Avatar({
  name,
  image,
}: {
  name: Name;
  image?: string;
}) {
  const initials = getInitials(name);

  return (
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 mr-4 h-8 w-8 sm:h-12 sm:w-12">
      {image ? (
        <Image
          alt="Avatar"
          className="w-full h-full rounded-full object-cover"
          height={40}
          src={image}
          width={40}
        />
      ) : (
        <span className="text-sm lg:text-xl xl:text-xl md:text-xl font-bold text-gray-600">
          {initials}
        </span>
      )}
    </div>
  );
}
