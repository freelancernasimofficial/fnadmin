import React from 'react'
import { IoApps } from '@react-icons/all-files/io5/IoApps'
import { IoPerson } from '@react-icons/all-files/io5/IoPerson'
import { IoSchool } from '@react-icons/all-files/io5/IoSchool'
import { IoSettings } from '@react-icons/all-files/io5/IoSettings'
import SideMenu, { SideMenuProps } from './SideMenu'
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
type Props = {}

export default function RightSidebar({}: Props) {
  return (
    <div className="fixed z-15 flex flex-col h-screen justify-start right-0 top-0 pt-12 dark:bg-gray-900  bg-white">
      {' '}
      <SideMenu position="right" className="right-0  md:translate-x-full" data={navLinks} />
    </div>
  )
}
