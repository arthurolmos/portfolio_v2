import React from "react";
import { TechnologyItem } from "../technology-item";

interface Props {
  item: [
    string,
    {
      title: string;
      src: string;
    }[]
  ];
}

export const TechnologySection = ({ item }: Props) => {
  const title = item[0].toUpperCase();
  const technologies = item[1];

  return (
    <section className="flex flex-col gap-2">
      <b>{title}</b>
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((item) => (
          <TechnologyItem item={item} />
        ))}
      </div>
    </section>
  );
};
