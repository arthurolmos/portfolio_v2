import React from "react";

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const SectionItem = ({ title, children }: Props) => {
  return (
    <section>
      <h2 className="font-item-title mb-2">{title}</h2>

      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};
