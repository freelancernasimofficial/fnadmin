import Image from 'next/image'
import React from 'react'
import logo_dark from '@/public/images/logo/nasim_dark.svg'
import logo_light from '@/public/images/logo/nasim_light.svg'
import Link from 'next/link'
import { IoPerson } from '@react-icons/all-files/io5/IoPerson'
import { IoLogIn } from '@react-icons/all-files/io5/IoLogIn'
import { IoLockClosed } from '@react-icons/all-files/io5/IoLockClosed'
import CheckBox from '@/src/components/CheckBox'
import TextField from '@/src/components/TextField'
import Button from '@/src/components/Button'
type Props = {}

export default function page({}: Props) {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:border-gray-700  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="mb-4">
              <Image priority alt="logo" width={150} height={36} className="dark:hidden w-36 " src={logo_light} />
              <Image priority alt="logo" width={150} height={36} className="hidden dark:block w-36" src={logo_dark} />
            </div>

            <form className="space-y-4 md:space-y-6" action="#">
              <TextField placeholder="Email" className="mb-6" label="Email" Icon={IoPerson} />
              <TextField placeholder="Password" label="Password" Icon={IoLockClosed} />

              <div className="flex items-center justify-between">
                <CheckBox title="Remember me" />
                <Link href="#" className="text-base font-medium text-FnPrimary hover:underline dark:text-FnLinkDark">
                  Forgot password?
                </Link>
              </div>
              <Button Icon={IoLogIn} className="w-full" title="Sign In" />
              <p className="text-base font-medium  text-gray500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link href="#" className="font-medium ml-2 text-FnLinkDark hover:underline dark:text-primary-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
