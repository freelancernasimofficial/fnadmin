import React, { HTMLAttributes } from "react";
import { IoHome } from "react-icons/io5";
type Props = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "dark";
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: HTMLAttributes<HTMLButtonElement>["onClick"];
  title: string;
  Icon?: typeof IoHome;
};

export default function Button({
  Icon,
  variant,
  title,
  className,
  onClick,
}: Props) {
  return (
    <button
      id='soomOutOnClick'
      onClick={onClick}
      className={`${getClassName(
        variant,
      )} text-center flex-row text-base justify-center flex items-center ${
        className ?? " "
      }`}
    >
      {Icon ? <Icon className='mr-2' size={20} /> : null}
      {title}
    </button>
  );
}

const getClassName = (variant?: Props["variant"]) => {
  switch (variant) {
    case "secondary":
      return "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600";
    case "dark":
      return "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700";
    case "warning":
      return "text-white bg-yellow-500 hover:bg-yellow-600  font-medium rounded-lg text-sm px-5 py-2.5 ";
    case "error":
      return "text-white bg-red-500 hover:bg-red-600   font-medium rounded-lg text-sm px-5 py-2.5";
    case "success":
      return "text-white bg-green-500 hover:bg-green-600  font-medium rounded-lg text-sm px-5 py-2.5";
    case "info":
      return "text-white bg-sky-500 hover:bg-sky-600  font-medium rounded-lg text-sm px-5 py-2.5";

    default:
      return "text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 contrast-150";
  }
};
