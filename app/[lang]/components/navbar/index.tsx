"use client";

import React from "react";
import Menu from "./menu";
import Social from "./social";
import { oswald } from "@/app/fonts";
import LanguageSelector from "./language-selector";

interface Props {
  dict: {
    [key: string]: any;
  };
}

export default function Navbar({ dict }: Props) {
  return (
    <nav className={`grid grid-cols-3 p-5 ${oswald.className}`}>
      <Social />

      <Menu dict={dict} />

      <LanguageSelector dict={dict} />
    </nav>
  );
}
