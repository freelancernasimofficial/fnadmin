import React, { ButtonHTMLAttributes, HTMLAttributes, LabelHTMLAttributes, SVGAttributes } from 'react'
import { IoArrowForward } from '@react-icons/all-files/io5'
type Props = {
  rounded?: boolean
  outlined?: boolean
  bg?: string
  Icon: typeof IoArrowForward
  SvgClassName?: SVGAttributes<SVGElement>['className']
} & LabelHTMLAttributes<HTMLLabelElement>

export default function VectorButton({ SvgClassName, Icon, className, ...props }: Props) {
  return (
    <label
      className={`zoomOutOnClick group hover:bg-gray-100 transition-transform duration-75 dark:hover:bg-gray-800  cursor-pointer  font-medium rounded-full w-10 h-10 p-[9px]   flex justify-center items-center  ${
        className ? className : ''
      }`}
      {...props}
    >
      <Icon
        className={`w-full h-full text-gray-500 group-hover:text-black dark:group-hover:text-white dark:text-gray-400 ${
          SvgClassName ?? ''
        }`}
      />
    </label>
  )
}
