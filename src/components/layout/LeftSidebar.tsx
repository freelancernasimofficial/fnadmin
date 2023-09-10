import React from 'react'
import { IoApps } from '@react-icons/all-files/io5/IoApps'
import { IoPerson } from '@react-icons/all-files/io5/IoPerson'
import { IoSchool } from '@react-icons/all-files/io5/IoSchool'
import { IoSettings } from '@react-icons/all-files/io5/IoSettings'
import SideMenu, { SideMenuProps } from './SideMenu'
import { AiOutlineDoubleLeft } from '@react-icons/all-files/ai/AiOutlineDoubleLeft'
import { AiOutlineExpand } from '@react-icons/all-files/ai/AiOutlineExpand'
import VectorButton from '../VectorButton'
type Props = {}

const navLinks: SideMenuProps['data'] = [
  {
    title: 'Dashboard',
    icon: IoApps,
    href: '/dashboard',
  },
  {
    title: 'Courses',
    icon: IoSchool,
    href: '/dashboard/courses',
  },
  {
    title: 'Sign In',
    icon: IoPerson,
    href: '/signin',
  },
  {
    title: 'Settings',
    icon: IoSettings,
    href: '/dashboard',
    dropdownLinks: [
      {
        title: 'Dashboard',
        icon: IoApps,
        href: '/dashboard',
      },
      {
        title: 'Courses',
        icon: IoSchool,
        href: '/dashboard/courses',
      },
      {
        title: 'Sign In',
        icon: IoPerson,
        href: '/signin',
      },
    ],
  },
]

export default function LeftSidebar({}: Props) {
  return (
    <div>
      <input id="isLeftDrawerActive" type="checkbox" className="peer/isLeftDrawerActive" />
      <div className="md:-translate-x-full peer-checked/isLeftDrawerActive:translate-x-0 transition-transform fixed z-15 h-screen flex flex-col left-0 pt-12 top-0 justify-start dark:bg-gray-900  bg-white">
        <SideMenu className="flex flex-col flex-1" position="left" data={navLinks} />

        <div className="flex  items-center justify-end peer-checked/isCollapsedLeft:justify-center p-3 peer-checked/isCollapsedLeft:[&>#expandSideMenuLeft]:block peer-checked/isCollapsedLeft:[&>#collapseSideMenuLeft]:hidden">
          <VectorButton
            htmlFor="isSideMenuCollapsedLeft"
            className="peer-checked/isCollapsedLeft:hidden"
            id="collapseSideMenuLeft"
            Icon={AiOutlineDoubleLeft}
          />
          <VectorButton
            htmlFor="isSideMenuCollapsedLeft"
            className="hidden"
            id="expandSideMenuLeft"
            Icon={AiOutlineExpand}
          />
        </div>
      </div>
    </div>
  )
}
