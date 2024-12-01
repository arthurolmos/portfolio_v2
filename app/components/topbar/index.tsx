"use client";

import { LocalesEnum } from "@/app/[lang]/dictionaries/types";
import { oswald } from "@/app/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  dict: {
    [key: string]: any;
  };
}

export default function Topbar({ dict }: Props) {
  const pathname = usePathname();
  const splitPathname = pathname.split("/").filter((path) => path);
  const selectedLang = splitPathname[0];
  const pathnameWithoutLang = splitPathname.slice(1).join("/");

  const locales = Object.values(LocalesEnum);

  return (
    <div
      className={`w-full flex justify-end items-center py-3 px-5 gap-2  ${oswald.className}`}
    >
      {dict.menu.language}:
      <Link
        href={`/${locales[0]}/${pathnameWithoutLang}/`}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === locales[0] && "text-green"
        }`}
      >
        {locales[0]}
      </Link>
      {"/"}
      <Link
        href={`/${locales[1]}/${pathnameWithoutLang}/`}
        shallow={true}
        className={`cursor-pointer hover:text-green transition-colors ${
          selectedLang === locales[1] && "text-green"
        }`}
      >
        {locales[1]}
      </Link>
    </div>
  );
}
