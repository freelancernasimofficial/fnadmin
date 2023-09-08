import React from 'react'
import { LuPanelLeftClose } from 'react-icons/lu'
import Menu, { MenuItemDropDown, MenuItem } from '../Menu'
type Props = {}
import { IoApps, IoHome, IoSchool } from 'react-icons/io5'
import { BiCollapseHorizontal } from 'react-icons/bi'
import VectorButton from '../VectorButton'
import { RiApps2Line, RiNotification2Line } from 'react-icons/ri'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
export default function SidebarLeft({}: Props) {
  return (
    <React.Fragment>
      <input
        className="hidden w-0 h-0 scale-0 peer/left_drawer_nav"
        type="checkbox"
        aria-labelledby="leftDrawerOpenLabel leftDrawerCloseLabel"
        id="isLeftDrawerActive"
      />

      <aside className="peer-checked/left_drawer_nav:translate-x-0 fixed top-0 left-0 z-40 h-full pt-20 transition-transform md:-translate-x-full bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-900 dark:border-gray-800 flex flex-col  justify-between">
        <input
          className="peer/leftDrawerCollapseStatus"
          type="checkbox"
          aria-labelledby="leftDrawerCollapsLabel leftDrawerExtendLabel"
          id="isLeftDrawerCollapsed"
        />
        <Menu className="peer-checked/leftDrawerCollapseStatus:[&>a>.menuItemText]:hidden peer-checked/leftDrawerCollapseStatus:[&>#dropdownItemWrapper>label>.menuItemText]:hidden">
          <MenuItem href="/dashboard" Icon={RiApps2Line} title="Dashboard" />
          <MenuItem href="/dashboard/courses" Icon={RiNotification2Line} title="Notifications" />

          <MenuItemDropDown Icon={IoSchool} title="Education">
            <MenuItem href="/dashboard/courses" title="Courses" />
            <MenuItem href="/" title="Education" />
            <MenuItem href="/signin" title="Sign In" />
          </MenuItemDropDown>
          <MenuItemDropDown Icon={IoSchool} title="School">
            <MenuItem href="/dashboard/courses" title="Classes" />
            <MenuItem href="/" title="Teachers" />
            <MenuItem href="/signin" title="Exams" />
          </MenuItemDropDown>
        </Menu>

        <div
          id="leftDrawerBottomButtons"
          className="flex flex-row p-2 items-center justify-between peer-checked/leftDrawerCollapseStatus:[&>#leftDrawerCollapsLabel]:hidden peer-checked/leftDrawerCollapseStatus:[&>#leftDrawerCloseLabel]:hidden peer-checked/leftDrawerCollapseStatus:[&>#leftDrawerExtendLabel]:block"
        >
          <VectorButton
            className="hidden md:block"
            htmlFor="isLeftDrawerActive"
            id="leftDrawerCloseLabel"
            Icon={LuPanelLeftClose}
          />
          <VectorButton htmlFor="isLeftDrawerCollapsed" id="leftDrawerCollapsLabel" Icon={AiOutlineDoubleLeft} />
          <VectorButton
            className="hidden"
            htmlFor="isLeftDrawerCollapsed"
            id="leftDrawerExtendLabel"
            Icon={BiCollapseHorizontal}
          />
        </div>
      </aside>
    </React.Fragment>
  )
}
