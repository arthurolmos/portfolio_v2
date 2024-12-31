import React from "react";
import { Locales } from "../dictionaries/types";
import { StackContainer } from "./stack-container";
import { getDictionary } from "../dictionaries";

interface Props {
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function Stacks({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <StackContainer dict={dict} />;
}
