"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  link: string;
}

export const MenuItem = ({ title, link }: Props) => {
  const pathname = usePathname();
  const splitPathname = pathname.split("/").filter((path) => path);
  const selectedLang = splitPathname[0];
  const pathnameWithoutLang = splitPathname.slice(1).join("/");

  const linkWithoutSlashes = link.replace(/\//g, "");
  const selected = linkWithoutSlashes === pathnameWithoutLang;

  return (
    <li
      className={`inline cursor-pointer hover:text-green transition-colors text-center uppercase ${
        selected && "text-green"
      }`}
    >
      <Link href={`/${selectedLang}${link}`}>{title}</Link>
    </li>
  );
};
