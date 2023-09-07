import Image from 'next/image'
import React from 'react'

type Props = {}

export default function AvatarMenu({}: Props) {
  return (
    <div className="relative">
      <input className="peer/isAvMenuOpen hidden opacity-0 w-0 h-0 invisible" type="checkbox" id="avatarMenu" />
      <label htmlFor="avatarMenu" className="peer-checked/isAvMenuOpen:[&>img]:ring-white ">
        <Image width={40} height={40} id="avatarImg" typeof="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 ring-2 p-1 ring-transparent ring-gray-300    dark:ring-gray-500 h-10 inline-block rounded-full overflow-hidden  cursor-pointer" src="/images/users/avatars/profile-picture-5.jpg" alt="User dropdown" />
      </label>
      {/* Dropdown menu */}
      <div className="z-10 absolute top-12 left-0 peer-checked/isAvMenuOpen:block hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </a>
        </div>
      </div>
    </div>
  )
}
