export const Locales = {
  "pt-BR": {
    key: "pt-BR",
    value: "PT",
  },
  "en-US": {
    key: "en-US",
    value: "EN",
  },
};

export type Dictionary = {
  menu: {
    language: string;
    profile: {
      position: string;
    };
    items: {
      home: string;
      about: string;
      portfolio: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
  };
};
