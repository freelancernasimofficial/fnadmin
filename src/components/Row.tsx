import React from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Row({ className, children }: Props) {
  return (
    <div className={`flex flex-row items-center ${className ?? ""}`}>
      {children}
    </div>
  );
}
