import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function AvatarStack({}: Props) {
  const data = ['/images/users/avatars/profile-picture-3.jpg', '/images/users/avatars/profile-picture-2.jpg', '/images/users/avatars/profile-picture-5.jpg', '/images/users/avatars/profile-picture-4.jpg', '/images/users/avatars/profile-picture-3.jpg', '/images/users/avatars/profile-picture-2.jpg']
  return (
    <div className="flex">
      {data.map((item, index) => {
        return <Image key={index.toString()} width={40} height={40} className="w-10 -ml-4 h-10 border-2 border-white rounded-full dark:border-gray-800" src={item} alt="userphoto" />
      })}

      <Link className="flex items-center -ml-4 justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
        +99
      </Link>
    </div>
  )
}
