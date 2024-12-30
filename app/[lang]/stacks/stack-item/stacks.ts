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

export const stacks: StackSectionType = {
  frontend: {
    name: "Front-end",
    main: [
      { title: "React", src: "/images/react-logo.svg" },
      { title: "NextJS", src: "/images/nextjs-logo.svg" },
    ],
    others: ["Typescript", "HTML", "CSS", "TailwindCSS", "Styled-Components"],
  },
  mobile: {
    name: "Mobile",
    main: [
      { title: "React Native", src: "/images/react-logo.svg" },
      { title: "Expo", src: "/images/expo-logo.svg" },
    ],
    others: ["Google Play & App Store", "Push Notifications", "Geolocation"],
  },
  backend: {
    name: "Back-end",
    main: [
      { title: "NodeJS", src: "/images/nodejs-logo.svg" },
      { title: "NestJS", src: "/images/nestjs-logo.svg" },
    ],
    others: ["Express", "Serverless", "Lambda", "GraphQL"],
  },
  "cloud-and-it": {
    name: "Cloud & IT",
    main: [
      { title: "AWS", src: "/images/aws-logo.svg" },
      { title: "Firebase", src: "/images/firebase-logo.svg" },
      { title: "Heroku", src: "/images/heroku-logo.svg" },
      { title: "Docker", src: "/images/docker-logo.svg" },
    ],
    others: ["EC2", "S3", "RDS"],
  },
  databases: {
    name: "Databases",
    main: [
      { title: "Microsoft SQL Server", src: "/images/sql-server-logo.svg" },
      { title: "PostgreSQL", src: "/images/psql-logo.svg" },
      { title: "MongoDB", src: "/images/mongodb-logo.svg" },
      { title: "Redis", src: "/images/redis-logo.svg" },
      { title: "DynamoDB", src: "/images/dynamo-logo.svg" },
    ],
  },
};
