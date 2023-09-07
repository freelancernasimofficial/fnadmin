import React, { ButtonHTMLAttributes } from "react";
import { IoArrowForward } from "react-icons/io5";
type Props = {
  rounded?: boolean;
  outlined?: boolean;
  bg?: string;
  Icon: typeof IoArrowForward;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function VectorButton({ Icon, className, ...props }: Props) {
  return (
    <button
      id='zoomOutOnClick'
      className={`dark:bg-gray-800 bg-gray-200 hover:bg-gray-100  focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center  dark:hover:text-white  dark:hover:bg-gray-700 ${
        className ? className : ""
      }`}
      {...props}
    >
      <Icon className='w-5 h-5 text-white' />
    </button>
  );
}
