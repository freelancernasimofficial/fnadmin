import React from 'react'
import { IoApps } from '@react-icons/all-files/io5/IoApps'
import { IoPerson } from '@react-icons/all-files/io5/IoPerson'
import { IoSchool } from '@react-icons/all-files/io5/IoSchool'
import { IoSettings } from '@react-icons/all-files/io5/IoSettings'
import SideMenu, { SideMenuProps } from './SideMenu'
import { AiOutlineDoubleLeft } from '@react-icons/all-files/ai/AiOutlineDoubleLeft'
import { BiCollapse } from '@react-icons/all-files/bi/BiCollapse'
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
    <div className="fixed z-15 h-screen flex flex-col left-0 pt-12 top-0 justify-start dark:bg-gray-900  bg-white">
      <SideMenu position="left" className="flex-1 flex flex-col left-0 md:-translate-x-full" data={navLinks} />

      <div className="flex  items-center justify-end peer-checked/isCollapsed:justify-center p-3 peer-checked/isCollapsed:[&>#expandSideMenu]:block peer-checked/isCollapsed:[&>#collapseSideMenu]:hidden">
        <VectorButton
          htmlFor="isSideMenuCollapsed"
          className="peer-checked/isCollapsed:hidden"
          id="collapseSideMenu"
          Icon={AiOutlineDoubleLeft}
        />
        <VectorButton htmlFor="isSideMenuCollapsed" className="hidden" id="expandSideMenu" Icon={BiCollapse} />
      </div>
    </div>
  )
}
