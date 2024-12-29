import DefaultTemplate from "@/app/[lang]/components/templates";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AboutTemplate({ children }: Props) {
  return (
    <DefaultTemplate key={"about-template"} title={"Sobre Mim"}>
      {children}
    </DefaultTemplate>
  );
}
