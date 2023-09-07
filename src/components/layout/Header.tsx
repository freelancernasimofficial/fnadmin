import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo/nasim_dark.svg'
import light_logo from '@/public/images/logo/nasim_light.svg'
import avatarphoto from '@/public/images/users/avatars/profile-picture-2.jpg'
import Link from 'next/link'
import Avatar from '../Avatar'
import { BiMenuAltLeft } from 'react-icons/bi'
import { RiApps2Line, RiMenu2Fill, RiNotification2Line } from 'react-icons/ri'
import { HiMenuAlt2 } from 'react-icons/hi'
import Row from '../Row'
import VectorButton from '../VectorButton'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-900 dark:border-gray-800 fixed left-0 right-0 top-0 z-[50]">
      <div className="flex flex-wrap justify-between items-center relative">
        <Row className="flex flex-1 justify-start items-center">
          <label htmlFor="isLeftDrawerActive" id="leftDrawerOpenLabel" className="p-2 group mr-2 hidden md:block text-gray-600 rounded-lg cursor-pointer  hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <HiMenuAlt2
              className="
            dark:text-gray-400
            group-hover:text-gray-950
            group-hover:stroke-gray-950
            dark:group-hover:text-white
             text-gray-500 w-6 h-6
             "
            />

            <span className="sr-only">Toggle sidebar</span>
          </label>

          <Link href="/" className="flex justify-start w-32 mr-4">
            <Image src={logo} className="mr-3 h-8 hidden dark:block" alt="fnadmin Logo" />
            <Image src={light_logo} className="mr-3 h-8 dark:hidden" alt="fnadmin Logo" />
          </Link>
        </Row>

        <input aria-labelledby="isFnNotificationPopUpOpenLabelButton isFnNotificationPopUpCloseLabelButton" id="isFnNotificationPopUpOpen" className="peer/isFnNotificationPopUpOpen shrink-0 w-0 h-0 invisible hidden scale-0" type="checkbox" />
        <VectorButton SvgClassName="w-[26px] h-[26px]" htmlFor="isFnNotificationPopUpOpen" id="isFnNotificationPopUpOpenLabelButton" className="hover:bg-gray-100 dark:hover:bg-gray-800 mr-4   peer-checked/isFnNotificationPopUpOpen:bg-gray-100 dark:peer-checked/isFnNotificationPopUpOpen:bg-gray-800 dark:peer-checked/isFnNotificationPopUpOpen:[&>svg]:!text-gray-400 peer-checked/isFnNotificationPopUpOpen:[&>svg]:!text-gray-950 " Icon={RiNotification2Line} />

        <label className="absolute hidden h-0 w-0 left-0 top-0 peer-checked/isFnNotificationPopUpOpen:w-screen peer-checked/isFnNotificationPopUpOpen:h-screen peer-checked/isFnNotificationPopUpOpen:block bg-opacity-0" id="isFnNotificationPopUpCloseLabelButton" htmlFor="isFnNotificationPopUpOpen"></label>
        <div className="hidden xs:w-full absolute top-8 right-0 w-100 shrink-0 peer-checked/isFnNotificationPopUpOpen:!block overflow-hidden z-[70] my-4  text-base list-none bg-white  divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-800 rounded-xl" id="notification-dropdown">
          <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">Notifications</div>
          <div>
            <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div className="flex-shrink-0">
                <Image className="w-11 h-11 rounded-full" src={avatarphoto} alt="Bonnie Green avatar" />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-800">
                  <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">a few moments ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div className="flex-shrink-0">
                <Image className="w-11 h-11 rounded-full" src={avatarphoto} alt="Jese Leos avatar" />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                  <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Jese leos</span>
                  and
                  <span className="font-medium text-gray-900 dark:text-white">5 others</span>
                  started following you.
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">10 minutes ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div className="flex-shrink-0">
                <Image className="w-11 h-11 rounded-full" src={avatarphoto} alt="Joseph McFall avatar" />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-800">
                  <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
                  and
                  <span className="font-medium text-gray-900 dark:text-white">141 others</span>
                  love your story. See it and view more stories.
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">44 minutes ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div className="flex-shrink-0">
                <Image className="w-11 h-11 rounded-full" src={avatarphoto} alt="Roberta Casas image" />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-800">
                  <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>
                  mentioned you in a comment:
                  <span className="font-medium text-primary-600 dark:text-primary-500">@bonnie.green</span>
                  what do you say?
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">1 hour ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
              <div className="flex-shrink-0">
                <Image className="w-11 h-11 rounded-full" src={avatarphoto} alt="Robert image" />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-800">
                  <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Robert Brown</span>
                  posted a new video: Glassmorphism - learn how to implement the new design trend.
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">3 hours ago</div>
              </div>
            </a>
          </div>
          <a href="#" className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
            <div className="inline-flex items-center">
              <svg aria-hidden="true" className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View all
            </div>
          </a>
        </div>
        {/* Apps */}

        <input aria-labelledby="isFnAppsPopUpCloseLabelButton isFnAppsPopUpOpenLabelButton" type="checkbox" className="peer/isFnAppsPopUpOpen  w-0 h-0 invisible hidden scale-0" id="isFnAppsPopUpOpen" />
        <VectorButton htmlFor="isFnAppsPopUpOpen" id="isFnAppsPopUpOpenLabelButton" className="mr-4 dark:peer-checked/isFnAppsPopUpOpen:bg-gray-800 peer-checked/isFnAppsPopUpOpen:bg-gray-100 dark:peer-checked/isFnAppsPopUpOpen:[&>svg]:text-gray-400 peer-checked/isFnAppsPopUpOpen:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" Icon={RiApps2Line} />

        {/* Dropdown menu */}

        <label className="absolute hidden h-0 w-0 left-0 top-0 peer-checked/isFnAppsPopUpOpen:w-screen peer-checked/isFnAppsPopUpOpen:h-screen peer-checked/isFnAppsPopUpOpen:block bg-opacity-0" id="isFnAppsPopUpCloseLabelButton" htmlFor="isFnAppsPopUpOpen"></label>
        <div className="hidden xs:w-full w-80 absolute top-8 right-0 shrink-0 peer-checked/isFnAppsPopUpOpen:!block overflow-hidden z-50 my-4  text-base list-none bg-white  divide-y divide-gray-100 shadow-lg dark:bg-gray-800 dark:divide-gray-600 rounded-xl" id="FnAppsPopUp">
          <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">Apps</div>
          <div className="grid grid-cols-3 gap-4 p-4">
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Sales</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Users</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Inbox</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Profile</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Settings</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Products</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Pricing</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Billing</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg aria-hidden="true" className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <div className="text-sm text-gray-900 dark:text-white">Logout</div>
            </a>
          </div>
        </div>

        <button className="mr-2 ml-3 shrink-0  focus:ring-4 ring-blue-300 dark:ring-gray-600 rounded-full">
          <label htmlFor="isRightDrawerActive" className="shrink-0" id="rightDrawerOpenLabel">
            <Avatar active size={32} />
          </label>
        </button>
      </div>
    </nav>
  )
}
