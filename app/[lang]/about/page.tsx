import React from "react";
import Image from "next/image";
import { SectionItem } from "./section-item";
import { getDictionary } from "../dictionaries";
import { LocalesEnum } from "../dictionaries/types";

interface Props {
  params: Promise<{ lang: keyof typeof LocalesEnum }>;
}

export default async function About({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6 w-4/5">
        <SectionItem title={dict.about.sections[0].title}>
          <p className="text-justify">{dict.about.sections[0].body[0]}</p>
        </SectionItem>

        <SectionItem title={dict.about.sections[1].title}>
          <p className="text-justify">{dict.about.sections[1].body[0]}</p>

          <p className="text-justify">{dict.about.sections[1].body[1]}</p>

          <p className="text-justify">
            {dict.about.sections[1].body[2]}{" "}
            <a
              href="https://www.scrumlaunch.com/"
              target="_blank"
              className="hover:text-green font-bold"
            >
              Scrumlaunch
            </a>
            {dict.about.sections[1].body[3]}
          </p>
        </SectionItem>

        <SectionItem title={dict.about.sections[2].title}>
          <ul className="list-disc pl-5">
            {dict.about.sections[2].body.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </SectionItem>
      </div>

      <div className="flex flex-col items-center shadow-md p-2 h-4/5">
        <Image
          alt="Eu e o Aleluia"
          src={"/images/aleluia.jpg"}
          width={600}
          height={600}
        />
        <i>{dict.about.image}</i>
      </div>
    </div>
  );
}
