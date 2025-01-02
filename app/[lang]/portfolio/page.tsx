import React from "react";
import { Locales } from "../dictionaries/types";
import { getDictionary } from "../dictionaries";
import { PortfolioContainer } from "./portfolio-container";

interface Props {
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function Portfolio({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PortfolioContainer dict={dict} />;
}
