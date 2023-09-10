import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { IoHomeOutline, IoCaretDown, IoCaretUp } from '@react-icons/all-files/io5'
type Props = {
  children: React.ReactNode
} & HTMLAttributes<HTMLUListElement>

export default function Menu({ children, className, ...props }: Props) {
  return (
    <>
      <input
        className="peer/leftDrawerCollapseStatus h-0 w-0 hidden scale-0 absolute left-[99999px]"
        type="checkbox"
        aria-labelledby="leftDrawerCollapsLabel leftDrawerExtendLabel"
        id="isLeftDrawerCollapsed"
      />
      <ul
        className={`flex [&>li]:!cursor-pointer peer-checked/leftDrawerCollapseStatus:[&>li>a>#menuItemText]:hidden peer-checked/leftDrawerCollapseStatus:[&>li>ul]:absolute peer-checked/leftDrawerCollapseStatus:[&>li>ul]:left-full peer-checked/leftDrawerCollapseStatus:[&>li>ul]:py-3 peer-checked/leftDrawerCollapseStatus:[&>li>ul]:rounded-r-lg peer-checked/leftDrawerCollapseStatus:[&>li>ul>li>a>#menuItemText]:w-auto  peer-checked/leftDrawerCollapseStatus:[&>li>ul]:mt-0  peer-checked/leftDrawerCollapseStatus:[&>li>ul]:w-60 peer-checked/leftDrawerCollapseStatus:[&>li>ul]:bg-white peer-checked/leftDrawerCollapseStatus:[&>li>ul]:shadow peer-checked/leftDrawerCollapseStatus:[&>li>ul]:pl-0   flex-col flex-1 font-medium ${
          className ?? ''
        }`}
        {...props}
      >
        {children}
      </ul>
    </>
  )
}
type MenuItemProps = {
  title: string
  Icon?: typeof IoHomeOutline
  href: string
  className?: HTMLAttributes<HTMLAnchorElement>['className']
  tabIndex?: number
}
export const MenuItem = ({ tabIndex, className, href, title, Icon }: MenuItemProps) => {
  return (
    <li tabIndex={tabIndex} className={`cursor-pointer flex flex-col group `}>
      <Link
        className={`flex  justify-center rounded-md items-center h-10 mx-3 px-3 py-2 group-focus-within:bg-gray-100 dark:group-focus-within:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 ${
          className ?? ''
        }`}
        href={href}
      >
        {Icon ? (
          <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ) : null}

        <span
          id="menuItemText"
          className="items-center w-48 pl-3 justify-between flex flex-1   text-black dark:text-white"
        >
          {title}
        </span>
      </Link>
    </li>
  )
}
type DropDownLabel = {
  title: string
  Icon?: typeof IoHomeOutline
  children?: React.ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
  tabIndex?: number
}

export const MenuItemDropDown = ({ children, tabIndex, className, title, Icon }: DropDownLabel) => {
  return (
    <li tabIndex={tabIndex} className={`cursor-pointer  flex flex-col items-start  group/dropdown`}>
      <Link
        href="#"
        className={`flex justify-center rounded-md items-center h-10 mx-3 px-3 py-2 group-focus-within/dropdown:bg-gray-100 dark:group-focus-within/dropdown:bg-gray-800 group-focus/dropdown:bg-gray-100 dark:group-focus/dropdown:bg-gray-800 group-hover/dropdown:bg-gray-100 dark:group-hover/dropdown:bg-gray-800  ${
          className ?? ''
        }`}
      >
        {Icon ? (
          <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover/dropdown:text-gray-900 dark:group-hover/dropdown:text-white" />
        ) : null}

        <span
          id="menuItemText"
          className="items-center justify-between w-48 pl-3 flex flex-1   text-black dark:text-white"
        >
          {title}
          <IoCaretDown className="group-focus/dropdown:hidden group-focus-within/dropdown:hidden" />
          <IoCaretUp className="hidden group-focus/dropdown:block group-focus-within/dropdown:block" />
        </span>
      </Link>
      <ul
        id="submenu"
        className="[&>li>a]:px-0 [&>li>a>#menuItemText]:w-auto pl-8 mt-2 w-full hidden group-focus/dropdown:block group-focus-within/dropdown:block"
      >
        {children}
      </ul>
    </li>
  )
}
