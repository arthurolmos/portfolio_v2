"use client";

import React, { useState } from "react";
import { DictType, StackItemType } from "../../types";
import { StackSection } from "../stack-section";

interface Props {
  dict: DictType;
}

export const StackContainer = ({ dict }: Props) => {
  const keys = Object.keys(dict.stacks.items);
  const [selectedStackKey, setSelectedStackKey] = useState(keys[0]);

  const stackOptions = keys.map((key) => (
    <li
      className={`cursor-pointer ${
        selectedStackKey === key ? "text-green" : "text-black"
      }`}
      key={key}
      onMouseOver={() => setSelectedStackKey(key)}
    >
      {dict?.stacks?.categories?.[key]}
    </li>
  ));

  const selectedStackItems = Object.entries(dict?.stacks?.items).filter(
    (entry) => entry?.[0] === selectedStackKey
  );

  return (
    <div className="flex flex-col gap-8 items-center">
      <nav>
        <ul className="flex gap-4">{stackOptions}</ul>
      </nav>

      {selectedStackItems?.map(([key, stack]) => (
        <StackSection key={key} stack={stack as StackItemType} />
      ))}
    </div>
  );
};
