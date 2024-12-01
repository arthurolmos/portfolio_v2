import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const DefaultTemplate = ({ title, children }: Props) => {
  return (
    <div>
      <h1>{title}</h1>

      {children}
    </div>
  );
};
