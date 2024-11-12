"use client";

import React from "react";
import Image from "next/image";
import { Menu } from "./menu";
import { Social } from "./social";
import { Strings } from "@/app/strings";
import { useLanguageContext } from "@/app/contexts/language/language.context";
import { oswald } from "@/app/fonts";

export const Sidebar = () => {
  const { selectedLang } = useLanguageContext();

  return (
    <div
      className={`flex flex-col w-1/5 h-full px-5 py-10 bg-black text-white ${oswald.className}`}
    >
      <div className="flex flex-col h-2/5 gap-10">
        <div className="relative h-40 w-40 rounded-full overflow-hidden bg-white self-center">
          <Image
            alt="Profile picture"
            src="/1.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="text-center">
          <p className="text-center text-xl">ARTHUR OLMOS WOSNIAKI</p>
          <p className="text-center">
            {Strings.menu.profile.position[selectedLang]}
          </p>
        </div>
      </div>

      <Menu />

      <Social />
    </div>
  );
};
