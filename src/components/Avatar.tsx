import Image from "next/image";
import React from "react";

type Props = {
  active?: boolean;
};

export default function Avatar({ active }: Props) {
  return (
    <div className='relative'>
      <Image
        width={40}
        height={40}
        className='w-10 h-10 rounded-full'
        src='/images/users/avatars/profile-picture-5.jpg'
        alt='avatar'
      />
      <span
        className={`bottom-0 left-7 absolute  w-3.5 h-3.5 ${
          active ? "bg-green-400" : "bg-red-400"
        } border-2 border-white dark:border-gray-800 rounded-full`}
      />
    </div>
  );
}
