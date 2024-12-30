import DefaultTemplate from "@/app/[lang]/components/templates";
import React from "react";
import { getDictionary } from "../dictionaries";
import { Locales } from "../dictionaries/types";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function PortfolioLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <DefaultTemplate
      key={"portfolio-template"}
      title={dict.menu.items.portfolio}
    >
      {children}
    </DefaultTemplate>
  );
}
