"use client";

import { useLanguageContext } from "@/app/contexts/language/language.context";
import { LangsEnum } from "@/app/contexts/language/languages.enum";
import { oswald } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export const Topbar = () => {
  const { selectedLang } = useLanguageContext();

  return (
    <div
      className={`w-full bg-black flex justify-end items-center py-3 px-5 gap-2 text-white ${oswald.className}`}
    >
      LANGUAGE:
      <Link
        href={{
          query: `lang=${LangsEnum.en}`,
        }}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === LangsEnum.en && "text-green"
        }`}
      >
        EN
      </Link>
      {"/"}
      <Link
        href={{
          query: `lang=${LangsEnum.pt}`,
        }}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === LangsEnum.pt && "text-green"
        }`}
      >
        BR
      </Link>
    </div>
  );
};
