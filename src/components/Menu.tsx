import Link from "next/link";
import React from "react";
import { IoHomeOutline, IoCaretDown, IoCaretUp } from "react-icons/io5";
type Props = { children: React.ReactNode };

export default function Menu({ children }: Props) {
  return <ul className='space-y-2 font-medium'>{children}</ul>;
}
type MenuItemProps = {
  title: string;
  Icon?: typeof IoHomeOutline;
};
export const MenuItem = ({ title, Icon }: MenuItemProps) => {
  return (
    <li>
      <Link
        href='#'
        className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
      >
        {Icon ? (
          <Icon className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
        ) : null}

        <span className='ml-3 font-semibold'>{title}</span>
      </Link>
    </li>
  );
};
type DropDownLabel = {
  title: string;
  Icon?: typeof IoHomeOutline;
  children?: React.ReactNode;
};

export const MenuDropdownLabel = ({ children, title, Icon }: DropDownLabel) => {
  return (
    <li className='group w-full  cursor-pointer'>
      <input
        type='checkbox'
        className={`z-50 scale-0 invisible w-0 h-0 hidden nasim left-[99999px] peer/dropdown top-0`}
        id={title?.replaceAll(" ", "")}
      />
      <label
        htmlFor={title?.replaceAll(" ", "")}
        className='flex cursor-pointer peer-checked/dropdown:[&>#dropdowncaretUp]:block peer-checked/dropdown:[&>#dropdowncaretdown]:hidden items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
      >
        {Icon ? (
          <Icon className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' />
        ) : null}
        <span className='flex-1 text-base font-semibold ml-3 text-left whitespace-nowrap'>
          {title}
        </span>
        <IoCaretDown id='dropdowncaretdown' />
        <IoCaretUp id='dropdowncaretUp' className='hidden' />
      </label>

      <ul className={`hidden py-2 peer-checked/dropdown:!block space-y-2`}>
        <li>
          <a
            href='#'
            className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
          >
            Products
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
          >
            Billing
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
          >
            Invoice
          </a>
        </li>
      </ul>
    </li>
  );
};
