"use client";

import React from "react";
import { MenuItem } from "./menu-item";
import { Strings } from "@/app/strings";

export const Menu = () => {
  return (
    <nav className="flex h-2/5 justify-center items-center">
      <ul className="[&>*:not(:last-child)]:mb-3">
        {/* <MenuItem title={Strings.menu.items.home[selectedLang]} link="/" /> */}
        {/* <MenuItem
          title={Strings.menu.items.about[selectedLang]}
          link="/about/"
        />
        <MenuItem
          title={Strings.menu.items.portfolio[selectedLang]}
          link="/portfolio/"
        /> */}
      </ul>
    </nav>
  );
};
