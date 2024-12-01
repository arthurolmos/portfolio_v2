"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  link: string;
}

export default function MenuItem({ title, link }: Props) {
  const pathname = usePathname();
  const splitPathname = pathname.split("/").filter((path) => path);
  const selectedLang = splitPathname[0];
  const pathnameWithoutLang = splitPathname.slice(1).join("/");

  const selected = link === `/${pathnameWithoutLang}/`;

  return (
    <li
      className={`cursor-pointer hover:text-green transition-colors text-center uppercase ${
        selected && "text-green"
      }`}
    >
      <Link href={`/${selectedLang}${link}`}>{title}</Link>
    </li>
  );
}
