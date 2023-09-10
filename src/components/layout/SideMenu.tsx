import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

import { IoApps } from 'react-icons/io5'

export type SideMenuProps = {
  className?: HTMLAttributes<HTMLDivElement>['className']
  data: {
    icon?: typeof IoApps
    title: string
    href: string
    dropdownLinks?: {
      icon?: typeof IoApps
      title: string
      href: string
    }[]
  }[]
}

export default function SideMenu({ className, data }: SideMenuProps) {
  return (
    <ul
      className={`font-medium py-5  [&_li]:px-3 [&_li_a]:px-3 [&_li_a]:h-11 [&_li_a]:flex [&_li_a]:rounded-lg [&_li_a]:items-center  z-15 transition-transform top-12  dark:bg-gray-900 h-screen bg-white fixed  ${
        className ?? ''
      }
        `}
    >
      <input
        type="checkbox"
        className="peer/isCollapsed"
        aria-labelledby="collapseSideMenu ExpandSideMenu"
        id="isSideMenuCollapsed"
      />
      {data?.map((item, index) => {
        return item.dropdownLinks?.length ? (
          <li
            key={index}
            tabIndex={index}
            className="peer-checked/isCollapsed:[&>a>span#collapsable]:hidden dark:[&_svg]:text-gray-400 [&_svg]:text-gray-500 relative group"
          >
            <Link
              scroll={false}
              href="#"
              className="group-focus-within:bg-gray-100 dark:group-focus-within:bg-gray-800 over:bg-gray-100 dark:hover:bg-gray-800"
            >
              {' '}
              <item.icon className="dark:group-hover:text-white group-hover:text-gray-950 dark:group-focus-within:text-white dgroup-focus-within:text-gray-950 w-5 h-5 shrink-0" />{' '}
              <span id="collapsable" className="ml-3 collapsibleItem w-40 text-gray-950 dark:text-white">
                {item.title}
              </span>
            </Link>

            <ul className="absolute group-focus:scale-100 w-60 rounded-r-lg group-focus-within:scale-100 origin-left transition-transform scale-x-0 py-4 left-full top-0 bg-white dark:bg-gray-900">
              {item?.dropdownLinks?.map((dItem, dIndex) => {
                return (
                  <li tabIndex={dIndex} key={dIndex} className="group/dItem">
                    <Link
                      href={dItem.href}
                      className="group-hover/dItem:bg-gray-100 dark:group-hover/dItem:bg-gray-800"
                    >
                      <dItem.icon className="dark:group-hover/dItem:text-white  w-5 h-5 shrink-0 group-hover/dItem:text-gray-950 " />{' '}
                      <span id="collapsable" className="ml-3 collapsibleItem w-40 text-gray-950 dark:text-white">
                        {dItem.title}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        ) : (
          <li
            key={index}
            tabIndex={index}
            className="peer-checked/isCollapsed:[&>a>span#collapsable]:hidden dark:[&_svg]:text-gray-400 group [&_svg]:text-gray-500"
          >
            <Link href={item.href} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <item.icon className="dark:group-hover:text-white  w-5 h-5 shrink-0 group-hover:text-gray-950 dark:group-focus-within:text-white dgroup-focus-within:text-gray-950" />{' '}
              <span id="collapsable" className="ml-3  w-40 text-gray-950 dark:text-white ">
                {item.title}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
