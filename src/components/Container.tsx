import React from 'react'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export default function Container({ children, className }: Props) {
  return <div className={`${className ?? ''} mx-auto w-11/12`}>{children}</div>
}
