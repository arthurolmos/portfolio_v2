import DefaultTemplate from "@/app/[lang]/components/templates";
import React from "react";
import { Locales } from "../dictionaries/types";
import { getDictionary } from "../dictionaries";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function StacksLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <DefaultTemplate key={"stacks-template"} title={dict.menu.items.stacks}>
      {children}
    </DefaultTemplate>
  );
}
