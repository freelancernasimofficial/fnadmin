import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { IoHomeOutline, IoCaretDown, IoCaretUp } from 'react-icons/io5'
import Row from './Row'
type Props = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export default function Menu({ children, ...props }: Props) {
  return <div {...props}>{children}</div>
}
type MenuItemProps = {
  title: string
  Icon?: typeof IoHomeOutline
  href: string
}
export const MenuItem = ({ href, title, Icon }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {Icon ? (
        <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      ) : null}

      <span className="ml-3 menuItemText font-semibold">{title}</span>
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
    <div className="w-full MenuItemDropDown  cursor-pointer">
      <input
        type="checkbox"
        className="scale-0 invisible w-0 h-0 hidden absolute left-[99999px] peer/dropdown top-0"
        id={title?.replaceAll(' ', '')}
      />
      <label
        htmlFor={title?.replaceAll(' ', '')}
        className="flex group flex-row py-1.5  w-full items-center justify-between   cursor-pointer peer-checked/dropdown:[&>span>#dropdowncaretUp]:!inline peer-checked/dropdown:[&>span>#dropdowncaretdown]:!hidden  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {Icon ? (
          <Icon className="flex-shrink-0 mx-2.5 w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        ) : null}

        <div className="flex min-w-[200px] flex-1  flex-row items-center justify-between  text-gray-950 dark:text-white  font-semibold text-left whitespace-nowrap">
          <span> {title}</span>{' '}
          <IoCaretDown
            className="dark:text-gray-400 mr-2  inline group-hover:text-gray-950 dark:group-hover:text-white text-gray-500"
            id="dropdowncaretdown"
          />
          <IoCaretUp
            className="dark:text-gray-400 mr-2  dark:group-hover:text-white group-hover:text-gray-950 text-gray-500 hidden"
            id="dropdowncaretUp"
          />
        </div>
      </label>

      <div className={`hidden p peer-checked/dropdown:!block`}>
        <MenuItem href="#" title="Settings" />
      </div>
    </div>
  )
}
