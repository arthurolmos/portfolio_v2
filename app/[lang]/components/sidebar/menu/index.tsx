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
    <nav className="flex h-2/5 justify-center items-center">
      <ul className="[&>*:not(:last-child)]:mb-3">
        <MenuItem title={dict.menu.items.home} link="/" />
        <MenuItem title={dict.menu.items.about} link="/about/" />
        <MenuItem title={dict.menu.items.portfolio} link="/portfolio/" />
      </ul>
    </nav>
  );
}
