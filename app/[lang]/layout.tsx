import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./components/navbar";
import { roboto } from "../fonts";
import { getDictionary } from "./dictionaries";
import { LocalesEnum } from "./dictionaries/types";

export const metadata: Metadata = {
  title: "Arthur Wosniaki Online Resume",
  description: "Built with NextJS and TailwindCSS!",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: keyof typeof LocalesEnum }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html>
      <body className="flex flex-col h-screen">
        <Navbar dict={dict} />

        <div className={`w-full ${roboto.className} overflow-auto`}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
