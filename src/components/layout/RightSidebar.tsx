import React from 'react'
import { IoApps } from '@react-icons/all-files/io5/IoApps'
import { IoPerson } from '@react-icons/all-files/io5/IoPerson'
import { IoSchool } from '@react-icons/all-files/io5/IoSchool'
import { IoSettings } from '@react-icons/all-files/io5/IoSettings'
import SideMenu, { SideMenuProps } from './SideMenu'
import { AiOutlineDoubleRight } from '@react-icons/all-files/ai/AiOutlineDoubleRight'
import { AiOutlineExpand } from '@react-icons/all-files/ai/AiOutlineExpand'
import VectorButton from '../VectorButton'
type Props = {}

const navLinks: SideMenuProps['data'] = [
  {
    title: 'Dashboard Right',
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
      <input id="isRightDrawerActive" type="checkbox" className="peer/isRightDrawerActive" />
      <div className="md:translate-x-full peer-checked/isRightDrawerActive:translate-x-0 transition-transform fixed z-15 h-screen flex flex-col right-0 pt-12 top-0 justify-start dark:bg-gray-900  bg-white">
        <SideMenu className="flex flex-col flex-1" position="right" data={navLinks} />

        <div className="flex  items-center justify-start peer-checked/isCollapsedRight:justify-center p-3 peer-checked/isCollapsedRight:[&>#expandSideMenuRight]:block peer-checked/isCollapsedRight:[&>#collapseSideMenuRight]:hidden">
          <VectorButton
            htmlFor="isSideMenuCollapsedRight"
            className="peer-checked/isCollapsedRight:hidden"
            id="collapseSideMenuRight"
            Icon={AiOutlineDoubleRight}
          />
          <VectorButton
            htmlFor="isSideMenuCollapsedRight"
            className="hidden"
            id="expandSideMenuRight"
            Icon={AiOutlineExpand}
          />
        </div>
      </div>
    </div>
  )
}
