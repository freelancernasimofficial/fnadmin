import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { IoHomeOutline, IoCaretDown, IoCaretUp } from 'react-icons/io5'
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
    <Link href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      {Icon ? <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" /> : null}

      <span className="ml-3 menuItemText font-semibold">{title}</span>
    </Link>
  )
}
type DropDownLabel = {
  title: string
  Icon?: typeof IoHomeOutline
  children?: React.ReactNode
}

export const MenuDropdownLabel = ({ children, title, Icon }: DropDownLabel) => {
  return (
    <div className="group w-full dropdownWrapper  cursor-pointer">
      <input type="checkbox" className="scale-0 invisible w-0 h-0 hidden absolute left-[99999px] peer/dropdown top-0" id={title?.replaceAll(' ', '')} />
      <label htmlFor={title?.replaceAll(' ', '')} className="flex cursor-pointer peer-checked/dropdown:[&>#dropdowncaretUp]:block peer-checked/dropdown:[&>#dropdowncaretdown]:hidden  rounded-lg  group-hover:bg-gray-100  dark:group-hover:bg-gray-700">
        <div className="w-8 h-8">{Icon ? <Icon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" /> : null}</div>
        <div>
          <span className="flex-1 text-gray-950 dark:text-white  font-semibold ml-3 text-left whitespace-nowrap">{title}</span>
          <IoCaretDown id="dropdowncaretdown" />
          <IoCaretUp id="dropdowncaretUp" className="hidden" />
        </div>
      </label>

      <div className={`hidden p peer-checked/dropdown:!block`}>
        <MenuItem href="#" title="Settings" />
      </div>
    </div>
  )
}
