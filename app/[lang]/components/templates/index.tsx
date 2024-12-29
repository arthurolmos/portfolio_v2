import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function DefaultTemplate({ title, children }: Props) {
  return (
    <div className="p-5">
      <h1>{title}</h1>

      {children}
    </div>
  );
}
