export enum LangsEnum {
  "pt" = "pt",
  "en" = "en",
}

export type Dictorionary = {
  [key in LangsEnum]: {
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
};
