import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function DefaultTemplate({ title, children }: Props) {
  return (
    <div className="py-5 px-10">
      <div className="mb-8">
        <h1 className="mb-4">{`Arthur Wosniaki > ${title}`}</h1>
      </div>

      {children}
    </div>
  );
}
