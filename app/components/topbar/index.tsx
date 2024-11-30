"use client";

import { oswald } from "@/app/fonts";
import { Strings } from "@/app/strings";
import Link from "next/link";
import React from "react";

export const Topbar = () => {
  return (
    <div
      className={`w-full flex justify-end items-center py-3 px-5 gap-2  ${oswald.className}`}
    >
      {/* {Strings.menu.language[selectedLang]}: */}
      {/* <Link
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
      </Link> */}
    </div>
  );
};
