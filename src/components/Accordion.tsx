import { Hash, randomUUID } from 'crypto'
import React from 'react'

type Props = {
  uniqueId: string
  title: React.ReactNode
  content?: React.ReactNode
}

export default function Accordion({ uniqueId, title, content }: Props) {
  return (
    <div className="border-b  border-gray-200 dark:border-gray-700">
      <input id={`accordionStatus${uniqueId}`} className="peer/accordionButton hidden invisible opacity-0 w-0 h-0" type="checkbox" />

      <label htmlFor={`accordionStatus${uniqueId}`} className="flex cursor-pointer items-center justify-between w-full p-5 font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 peer-checked/accordionButton:[&>#accordionCaretDown]:block peer-checked/accordionButton:[&>#accordionCaretUp]:hidden">
        <span>{title}</span>

        <svg id="accordionCaretDown" className="w-3 h-3 rotate-180 shrink-0 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
        </svg>
        <svg id="accordionCaretUp" className="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"></path>
        </svg>
      </label>

      <div className="hidden  peer-checked/accordionButton:block p-5 ">{content}</div>
    </div>
  )
}
