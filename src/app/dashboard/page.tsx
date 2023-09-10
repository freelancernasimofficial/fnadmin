import React from 'react'
import Headline from '@/src/components/Headline'

type Props = {}

export default function page({}: Props) {
  return (
    <main className="p-4 mx-64">
      <Headline text="Dashboard" />
    </main>
  )
}
