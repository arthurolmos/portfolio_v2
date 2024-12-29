import { getDictionary } from "./dictionaries";
import { LocalesEnum } from "./dictionaries/types";
import { items } from "./components/technology-item/items";
import { TechnologySection } from "./components/technology-section";

interface Props {
  params: Promise<{ lang: keyof typeof LocalesEnum }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col p-20 gap-4">
      <h1 className="text-4xl">{dict.home.title}</h1>
      <h2 className="text-xl">{dict.home.subtitle}</h2>

      <p>Technologies I'm in:</p>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(items[0]).map((item) => (
            <TechnologySection item={item} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {Object.entries(items[1]).map((item) => (
            <TechnologySection item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
