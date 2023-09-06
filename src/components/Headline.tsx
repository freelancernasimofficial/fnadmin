import React from "react";

type Props = {
  text?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Headline({ text, className }: Props) {
  return (
    <h5
      className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${
        className ?? ""
      }`}
    >
      {text}
    </h5>
  );
}
