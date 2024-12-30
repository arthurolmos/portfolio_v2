"use client";

import React, { useEffect, useState } from "react";
import { Locales } from "../dictionaries/types";
import { StackSection } from "./stack-section";
import { stacks } from "./stack-item/stacks";
import { useParams } from "next/navigation";
import { getDictionaryClient } from "../actions";
import { DictType } from "../types";

export default function Stacks() {
  const { lang } = useParams();

  const [dict, setDict] = useState<DictType | null>(null);

  useEffect(() => {
    async function getDictionary() {
      if (lang) {
        const dict = await getDictionaryClient(lang as keyof typeof Locales);
        setDict(dict);
      }
    }

    if (lang) {
      getDictionary();
    }
  }, [lang]);

  const stackKeys = Object.keys(stacks);
  const [selectedStackKey, setSelectedStackKey] = useState<string>(
    stackKeys[0]
  );

  const stackOptions = stackKeys.map((key) => (
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

  const selectedStackItems = Object.entries(stacks).filter(
    (entry) => entry?.[0] === selectedStackKey
  );

  return (
    <div className="flex flex-col gap-8 items-center">
      <nav>
        <ul className="flex gap-4">{stackOptions}</ul>
      </nav>

      {selectedStackItems?.map(([key, stack]) => (
        <StackSection key={key} stack={stack} />
      ))}
    </div>
  );
}
