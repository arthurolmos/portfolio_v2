import React from "react";

interface Props {
  title: string;
}

export const DefaultLayout = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
