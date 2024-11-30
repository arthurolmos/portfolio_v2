import "server-only";

const dictionaries = {
  en: () => import("./langs/en.json").then((module) => module.default),
  pt: () => import("./langs/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  console.log({ locale });
  const dic = dictionaries[locale]();
};
