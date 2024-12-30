import DefaultTemplate from "@/app/[lang]/components/templates";
import React from "react";
import { getDictionary } from "../dictionaries";
import { Locales } from "../dictionaries/types";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function AboutLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <DefaultTemplate key={"about-template"} title={dict.menu.items.about}>
      {children}
    </DefaultTemplate>
  );
}
