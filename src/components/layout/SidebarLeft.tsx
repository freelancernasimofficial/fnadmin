import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import Menu, { MenuDropdownLabel, MenuItem } from "../Menu";
type Props = {};
import { IoApps, IoHome, IoSchool } from "react-icons/io5";
export default function SidebarLeft({}: Props) {
  return (
    <React.Fragment>
      <input
        className='hidden w-0 h-0 invisible'
        type='checkbox'
        aria-labelledby='leftDrawerOpenLabel leftDrawerCloseLabel'
        id='isLeftDrawerActive'
      />
      <aside
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform md:-translate-x-full bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-900 dark:border-gray-800'
        id='left_drawer_nav'
      >
        <div className='overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-900'>
          <Menu>
            <MenuItem Icon={IoApps} title='Dashboard' />
            <MenuDropdownLabel Icon={IoSchool} title='Education' />
            <MenuDropdownLabel Icon={IoHome} title='Courses' />
          </Menu>
        </div>
        <div className='absolute bottom-0 left-0 justify-end flex items-end  p-4 pr-6 space-x-4 w-full lg:flex bg-white dark:bg-gray-900 z-20'>
          <a
            href='#'
            data-tooltip-target='tooltip-settings'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <div
            id='tooltip-settings'
            role='tooltip'
            className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip'
          >
            Settings page
            <div className='tooltip-arrow' data-popper-arrow />
          </div>
          <button
            type='button'
            data-dropdown-toggle='language-dropdown'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='h-5 w-5 rounded-full mt-0.5'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 3900 3900'
            >
              <path fill='#b22234' d='M0 0h7410v3900H0z' />
              <path
                d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                stroke='#fff'
                strokeWidth={300}
              />
              <path fill='#3c3b6e' d='M0 0h2964v2100H0z' />
              <g fill='#fff'>
                <g id='d'>
                  <g id='c'>
                    <g id='e'>
                      <g id='b'>
                        <path
                          id='a'
                          d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                        />
                        <use xlinkHref='#a' y={420} />
                        <use xlinkHref='#a' y={840} />
                        <use xlinkHref='#a' y={1260} />
                      </g>
                      <use xlinkHref='#a' y={1680} />
                    </g>
                    <use xlinkHref='#b' x={247} y={210} />
                  </g>
                  <use xlinkHref='#c' x={494} />
                </g>
                <use xlinkHref='#d' x={988} />
                <use xlinkHref='#c' x={1976} />
                <use xlinkHref='#e' x={2470} />
              </g>
            </svg>
          </button>
          <label
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
            htmlFor='isLeftDrawerActive'
            id='leftDrawerCloseLabel'
          >
            <LuPanelLeftClose className='w-6 h-6' />
          </label>
        </div>
      </aside>
    </React.Fragment>
  );
}
