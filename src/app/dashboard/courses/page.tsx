import Headline from '@/src/components/Headline'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="mx-auto w-64 p-20">
      <Headline text="Courses" />
    </div>
  )
}
