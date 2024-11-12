import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  link: string;
}

export const SocialItem = ({ children, link }: Props) => {
  return (
    <li className="cursor-pointer hover:text-green transition-colors text-center">
      <Link href={link}>{children}</Link>
    </li>
  );
};
