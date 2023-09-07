import React from 'react'

type Props = {} & React.HTMLAttributes<HTMLParagraphElement>

export default function Paragraph({ className, children }: Props) {
  return <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${className ?? ''}`}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
}
