import { getDictionary } from "./dictionaries";
import { Locales } from "./dictionaries/types";

interface Props {
  params: Promise<{ lang: keyof typeof Locales }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col p-20 gap-4">
      <h1 className="text-4xl">{dict.home.title}</h1>
      <h2 className="text-xl">{dict.home.subtitle}</h2>
    </div>
  );
}
