export type DictType = { [key: string]: any };

export type StackItemType = {
  name: string;
  main: {
    title: string;
    src: string;
  }[];
  others?: string[];
};

export type StackSectionType = {
  [category: string]: StackItemType;
};

export type PortfolioItemType = {
  name: string;
  description: string;
  src: string[];
  type: string;
  urls: {
    name: string;
    url: string;
    logo?: string;
  }[];
  stack: string[];
};
