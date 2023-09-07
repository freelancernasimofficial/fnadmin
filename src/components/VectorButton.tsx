import React, { ButtonHTMLAttributes } from "react";

type Props = {
  rounded?: boolean;
  outlined?: boolean;
  bg?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function VectorButton({
  rounded,
  outlined,
  bg,
  ...props
}: Props) {
  return (
    <button
      className={`text-white ${
        outlined ? "bg-transparent" : bg ?? "bg-FnPrimary"
      } hover:${bg ?? "bg-FnPrimary"}  font-medium ${
        rounded ? "rounded-full" : "rounded-lg"
      } text-sm p-2.5 text-center inline-flex items-center mr-2 dark:${
        bg ?? "bg-FnPrimary"
      } dark:hover:${bg ?? "bg-FnPrimary"}`}
      {...props}
    >
      <svg
        className='w-5 h-5'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
      <span className='sr-only'>Icon description</span>
    </button>
  );
}
