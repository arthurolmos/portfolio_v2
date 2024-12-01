import { DefaultTemplate } from "@/app/components/templates";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AboutTemplate({ children }: Props) {
  return <DefaultTemplate title={"Sobre Mim"}>{children}</DefaultTemplate>;
}
