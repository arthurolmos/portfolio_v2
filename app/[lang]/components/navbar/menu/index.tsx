"use client";

import React from "react";
import MenuItem from "./menu-item";

interface Props {
  dict: {
    [key: string]: any;
  };
}

export default function Menu({ dict }: Props) {
  return (
    <ul className="flex justify-center items-center gap-4">
      <MenuItem title={dict.menu.items.home} link="/" />
      <MenuItem title={dict.menu.items.about} link="/about/" />
      <MenuItem title={dict.menu.items.portfolio} link="/portfolio/" />
    </ul>
  );
}
