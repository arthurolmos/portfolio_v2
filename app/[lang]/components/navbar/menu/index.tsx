"use client";

import React from "react";
import { MenuItem } from "./menu-item";
import { DictType } from "@/app/[lang]/types";

interface Props {
  dict: DictType;
}

export const Menu = ({ dict }: Props) => {
  return (
    <ul className="flex justify-center items-center gap-4">
      <MenuItem title={dict.menu.items.home} link="/" />
      <MenuItem title={dict.menu.items.about} link="/about/" />
      <MenuItem title={dict.menu.items.stacks} link="/stacks/" />
      <MenuItem title={dict.menu.items.portfolio} link="/portfolio/" />
    </ul>
  );
};
