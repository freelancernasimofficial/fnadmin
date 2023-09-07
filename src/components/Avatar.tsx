import Image from "next/image";
import React, { HTMLAttributes } from "react";

type Props = {
  active?: boolean;
  size?: number;
  className?: HTMLAttributes<HTMLElement>["className"];
};

export default function Avatar({ className, active, size }: Props) {
  return (
    <div className={`relative cursor-pointer ${className ?? ""}`}>
      <Image
        width={40}
        height={40}
        style={{ width: size, height: size, borderRadius: "999px" }}
        className='w-10 h-10 rounded-full'
        src='/images/users/avatars/profile-picture-5.jpg'
        alt='avatar'
      />
      <span
        className={`-bottom-1 right-0 absolute  w-3.5 h-3.5 ${
          active ? "bg-green-400" : "bg-red-400"
        } border-2 border-white dark:border-gray-800 rounded-full`}
      />
    </div>
  );
}
