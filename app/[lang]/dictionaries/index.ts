import "server-only";

const dictionaries = {
  ["en-US"]: () => import("./langs/en.json").then((module) => module.default),
  ["pt-BR"]: () => import("./langs/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
