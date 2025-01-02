import React from "react";
import Image from "next/image";
import { SectionItem } from "./section-item";
import { getDictionary } from "../dictionaries";
import { Locales } from "../dictionaries/types";

interface Props {
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function About({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="relative flex gap-6">
        <div className="flex flex-col gap-6 w-4/5 animate-fade-in">
          <SectionItem title={dict.about.sections[0].title}>
            <p className="text-justify">{dict.about.sections[0].body}</p>
          </SectionItem>

          <SectionItem title={dict.about.sections[1].title}>
            <div
              className="[&>p]:text-justify [&>p>a:hover]:text-green [&>p>a]:font-bold [&>p>a]:transition-colors"
              dangerouslySetInnerHTML={{
                __html: dict.about.sections[1].body,
              }}
            />
          </SectionItem>

          <SectionItem title={dict.about.sections[2].title}>
            <ul className="list-disc pl-5">
              {(dict.about.sections[2].body as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionItem>
        </div>

        <div className="flex flex-col items-center shadow-md p-2 h-4/5 bg-white">
          <Image
            alt="Eu e o Aleluia"
            src={"/images/aleluia.jpg"}
            width={400}
            height={400}
          />
          <i>{dict.about.image}</i>
        </div>
      </div>
    </>
  );
}
