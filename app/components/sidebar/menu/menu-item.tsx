"use client";

import React from "react";
import { useLanguageContext } from "@/app/contexts/language/language.context";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  link: string;
}

export const MenuItem = ({ title, link }: Props) => {
  const { selectedLang } = useLanguageContext();
  const pathname = usePathname();

  const selected = link === pathname;

  return (
    <li
      className={`cursor-pointer hover:text-green transition-colors text-center uppercase ${
        selected && "text-green"
      }`}
    >
      <Link href={{ pathname: link, query: { lang: selectedLang } }}>
        {title}
      </Link>
    </li>
  );
};
