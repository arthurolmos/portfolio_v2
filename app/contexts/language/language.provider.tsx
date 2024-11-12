"use client";

import { useSearchParams } from "next/navigation";
import { LangsEnum } from "./languages.enum";
import { LanguageContext } from "./language.context";

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: Props) => {
  const query = useSearchParams();
  const lang = query.get("lang");
  const selectedLang =
    lang && Object.keys(LangsEnum).includes(lang)
      ? (lang as LangsEnum)
      : LangsEnum.en;

  return (
    <LanguageContext.Provider
      value={{
        selectedLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
