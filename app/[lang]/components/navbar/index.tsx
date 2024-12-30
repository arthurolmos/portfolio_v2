"use client";

import React from "react";
import { Menu } from "./menu";
import { Social } from "./social";
import { LanguageSelector } from "./language-selector";
import { oswald } from "@/app/fonts";
import { DictType } from "../../types";

interface Props {
  dict: DictType;
}

export default function Navbar({ dict }: Props) {
  return (
    <nav className={`grid grid-cols-3 py-5 px-10 mb-10 ${oswald.className}`}>
      <Social />

      <Menu dict={dict} />

      <LanguageSelector dict={dict} />
    </nav>
  );
}
