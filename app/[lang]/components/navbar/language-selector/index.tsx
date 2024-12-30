"use client";

import { Locales } from "@/app/[lang]/dictionaries/types";
import { DictType } from "@/app/[lang]/types";
import { oswald } from "@/app/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  dict: DictType;
}

export const LanguageSelector = ({ dict }: Props) => {
  const pathname = usePathname();
  const splitPathname = pathname.split("/").filter((path) => path);
  const selectedLang = splitPathname[0];
  const pathnameWithoutLang = splitPathname.slice(1).join("/");

  const locales = Object.values(Locales);

  return (
    <div className={`flex justify-end items-center gap-2 ${oswald.className}`}>
      {dict.menu.language}:
      <Link
        href={`/${locales[0].key}/${pathnameWithoutLang}/`}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === locales[0].key && "text-green"
        }`}
      >
        {locales[0].value}
      </Link>
      {"/"}
      <Link
        href={`/${locales[1].key}/${pathnameWithoutLang}/`}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === locales[1].key && "text-green"
        }`}
      >
        {locales[1].value}
      </Link>
    </div>
  );
};
