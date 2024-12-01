import { getDictionary } from "./dictionaries";
import { LocalesEnum } from "./dictionaries/types";

interface Props {
  params: Promise<{ lang: keyof typeof LocalesEnum }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col p-20">
      <h1 className="text-4xl">{dict.home.title}</h1>
      <h2 className="text-xl">{dict.home.subtitle}</h2>

      <h3>Technologies I'm:</h3>
      <p></p>
    </div>
  );
}
