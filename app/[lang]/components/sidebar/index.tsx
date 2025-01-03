"use client";

import React from "react";
import Image from "next/image";
import Menu from "./menu";
import Social from "./social";
import { oswald } from "@/app/fonts";
import profilePicture from "@/public/images/1.jpg";

interface Props {
  dict: {
    [key: string]: any;
  };
}

export default function Sidebar({ dict }: Props) {
  return (
    <div
      className={`flex flex-col w-1/5 h-full px-5 py-10 bg-black text-white ${oswald.className}`}
    >
      <div className="flex flex-col h-2/5 gap-10">
        <div className="relative h-40 w-40 rounded-full overflow-hidden bg-white self-center flex align-center">
          <Image
            alt="Profile picture"
            src={profilePicture}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="text-center">
          <p className="text-center text-xl">ARTHUR OLMOS WOSNIAKI</p>
          <p className="text-center">{dict.menu.profile.position}</p>
        </div>
      </div>

      <Menu dict={dict} />

      <Social />
    </div>
  );
}
