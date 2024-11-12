"use client";

import { createContext, useContext } from "react";
import { LangsEnum } from "./languages.enum";

export const LanguageContext = createContext<{ selectedLang: LangsEnum }>({
  selectedLang: LangsEnum.en,
});

export const useLanguageContext = () => useContext(LanguageContext);
