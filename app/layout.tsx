import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/sidebar";
import { Topbar } from "./components/topbar";
import { LanguageProvider } from "./contexts/language/language.provider";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Arthur Wosniaki Online Resume",
  description: "Built with NextJS and TailwindCSS!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="h-screen">
        <LanguageProvider>
          <div className="flex h-screen">
            <Sidebar />

            <div className={`w-full ${roboto.className}`}>
              <Topbar />
              <main>{children}</main>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
