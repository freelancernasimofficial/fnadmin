import React from 'react'
import { LuPanelLeftClose } from 'react-icons/lu'
import Menu, { MenuItemDropDown, MenuItem } from '../Menu'
type Props = {}
import { IoApps, IoHome, IoSchool } from 'react-icons/io5'
import { BiCollapseHorizontal } from 'react-icons/bi'
import VectorButton from '../VectorButton'
export default function SidebarLeft({}: Props) {
  return (
    <React.Fragment>
      <input
        className="hidden w-0 h-0 scale-0 peer/left_drawer_nav"
        type="checkbox"
        aria-labelledby="leftDrawerOpenLabel leftDrawerCloseLabel"
        id="isLeftDrawerActive"
      />

      <aside className="peer-checked/left_drawer_nav:translate-x-0 fixed top-0 left-0 z-40 h-full pt-20 transition-transform md:-translate-x-full bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-900 dark:border-gray-800 flex flex-col  justify-between w-[260px]">
        <input
          className=" peer/leftDrawerCollapseStatus"
          type="checkbox"
          aria-labelledby="leftDrawerCollapsLabel"
          id="isLeftDrawerCollapsed"
        />
        <Menu>
          <MenuItem href="/dashboard" Icon={IoApps} title="Dashboard" />
          <MenuItem href="/dashboard/courses" Icon={IoSchool} title="Courses" />

          <MenuItemDropDown Icon={IoSchool} title="Education">
            <MenuItem href="/dashboard/courses" title="Courses" />
            <MenuItem href="/" title="Education" />
            <MenuItem href="/signin" title="Sign In" />
          </MenuItemDropDown>
        </Menu>

        <div id="leftDrawerBottomButtons " className="flex flex-row items-center justify-between ">
          <VectorButton
            className="hidden md:block"
            htmlFor="isLeftDrawerActive"
            id="leftDrawerCloseLabel"
            Icon={LuPanelLeftClose}
          />
          <VectorButton htmlFor="isLeftDrawerCollapsed" id="leftDrawerCollapsLabel" Icon={BiCollapseHorizontal} />
        </div>
      </aside>
    </React.Fragment>
  )
}
