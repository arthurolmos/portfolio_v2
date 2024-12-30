"use server";

import { getDictionary } from "./dictionaries";
import { Locales } from "./dictionaries/types";

export async function getDictionaryClient(lang: keyof typeof Locales) {
  try {
    return await getDictionary(lang);
  } catch (err) {
    console.error("Error getting dictionary", err);
    return null;
  }
}
