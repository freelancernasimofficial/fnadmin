import React from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children }: Props) {
  return (
    <div
      className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
