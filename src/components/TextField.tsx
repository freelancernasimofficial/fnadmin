import React, { HTMLAttributes } from "react";
import { IoPerson } from "react-icons/io5";
type Props = {
  label?: string;
  Icon?: typeof IoPerson;
  className?: HTMLAttributes<HTMLLabelElement>["className"];
  placeholder?: string;
};

export default function TextField({
  placeholder,
  label,
  Icon,
  className,
}: Props) {
  return (
    <div className={className}>
      {label ? (
        <label
          htmlFor='website-admin'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
      ) : null}
      <div
        className='
      flex overflow-hidden
      items-center h-11
      rounded-md
      bg-gray-100 
      dark:bg-gray-800'
      >
        <span className='inline-flex h-full  items-center px-3 text-sm text-gray-900 bg-gray-200   dark:bg-gray-700 dark:text-gray-400'>
          {Icon ? (
            <Icon className='text-gray-900 dark:text-gray-400' size={20} />
          ) : null}
        </span>
        <input
          type='text'
          className='bg-transparent text-base placeholder-base pl-2 p-0 h-full w-full dark:text-white text-gray-900 placeholder-gray-700 dark:placeholder-gray-500 outline-0 border-0'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
