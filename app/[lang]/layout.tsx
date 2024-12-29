import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
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
      <body className="h-screen">
        <div className="flex h-screen">
          <Sidebar dict={dict} />

          <div className={`w-full ${roboto.className} overflow-auto`}>
            <Topbar dict={dict} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
