export enum LocalesEnum {
  "pt-BR" = "pt-BR",
  "en-US" = "en-US",
}

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
