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
