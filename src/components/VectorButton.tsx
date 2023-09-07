import React, { ButtonHTMLAttributes, HTMLAttributes, LabelHTMLAttributes, SVGAttributes } from 'react'
import { IoArrowForward } from 'react-icons/io5'
type Props = {
  rounded?: boolean
  outlined?: boolean
  bg?: string
  Icon: typeof IoArrowForward
  SvgClassName?: SVGAttributes<SVGElement>['className']
} & LabelHTMLAttributes<HTMLLabelElement>

export default function VectorButton({ SvgClassName, Icon, className, ...props }: Props) {
  return (
    <label className={`zoomOutOnClick cursor-pointer  font-medium rounded-lg p-2  inline-flex items-center  ${className ? className : ''}`} {...props}>
      <Icon className={`w-6 h-6 text-gray-500 dark:text-gray-400 ${SvgClassName ?? ''}`} />
    </label>
  )
}
