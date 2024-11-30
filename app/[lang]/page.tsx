import { getDictionary } from "./dictionaries";
import { LangsEnum } from "./dictionaries/types";

interface Props {
  params: { lang: LangsEnum };
}

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang); // en

  return (
    <div className="flex flex-col p-20">
      {/* <h1 className="text-4xl">{Strings.home.title[selectedLang]}</h1>
      <h2 className="text-xl">{Strings.home.subtitle[selectedLang]}</h2> */}

      <h3>Technologies I'm:</h3>
      <p></p>
    </div>
  );
}
