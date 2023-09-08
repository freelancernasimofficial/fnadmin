import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { IoHomeOutline, IoCaretDown, IoCaretUp } from 'react-icons/io5'
import Row from './Row'
type Props = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export default function Menu({ children, ...props }: Props) {
  return (
    <div className="sidebarmenu flex flex-col flex-1 font-medium" {...props}>
      {children}
    </div>
  )
}
type MenuItemProps = {
  title: string
  Icon?: typeof IoHomeOutline
  href: string
  className?: HTMLAttributes<HTMLAnchorElement>['className']
}
export const MenuItem = ({ className, href, title, Icon }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center mx-3 p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group ${
        className ?? ''
      }`}
    >
      {Icon ? (
        <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ) : null}

      <span className="ml-3 menuItemText">{title}</span>
    </Link>
  )
}
type DropDownLabel = {
  title: string
  Icon?: typeof IoHomeOutline
  children?: React.ReactNode
}

export const MenuItemDropDown = ({ children, title, Icon }: DropDownLabel) => {
  return (
    <div className="dropdownItemWrapper flex flex-col">
      <input
        type="checkbox"
        className="scale-0 invisible w-0 h-0 hidden absolute left-[99999px] peer/dropdown top-0"
        id={title?.replaceAll(' ', '')}
      />
      <label
        htmlFor={title?.replaceAll(' ', '')}
        className="flex  group flex-row p-2 mx-3  flex-1  items-center justify-between cursor-pointer peer-checked/dropdown:[&>div>#dropdowncaretUp]:!inline peer-checked/dropdown:[&>div>#dropdowncaretdown]:!hidden  rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {Icon ? (
          <Icon className="flex-shrink-0 w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        ) : null}

        <div className="flex flex-1 group-hover:[&>svg]:text-white  items-center justify-between">
          <span className="dark:text-white ml-3"> {title}</span>{' '}
          <IoCaretDown
            className="dark:text-gray-400 group-hover:!text-black dark:group-hover:!text-white  text-gray-500"
            id="dropdowncaretdown"
          />
          <IoCaretUp
            className="dark:text-gray-400  group-hover:!text-black dark:group-hover:!text-white  text-gray-500 hidden"
            id="dropdowncaretUp"
          />
        </div>
      </label>

      <div className={`hidden pl-6 py-2 peer-checked/dropdown:!block bg-gray-50 dark:bg-black dark:bg-opacity-30`}>
        {children}
      </div>
    </div>
  )
}
