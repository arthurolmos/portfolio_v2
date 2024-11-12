import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SocialItem } from "./social-item";

export const Social = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-8 *:inline-block">
        <SocialItem link="/">
          <FaLinkedin size={28} />
        </SocialItem>
        <SocialItem link="/">
          <FaGithub size={28} />
        </SocialItem>
        <SocialItem link="/">
          <MdEmail size={28} />
        </SocialItem>
      </ul>
    </nav>
  );
};
