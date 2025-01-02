import React from "react";
import { MobilePreview } from "../../components/mobile-preview";
import { PortfolioItemType } from "../../types";
import Image from "next/image";

interface Props {
  index: number;
  item: PortfolioItemType;
}

export const PortfolioItem = async ({ index, item }: Props) => {
  const delay = index * 0.2;

  const { name, description, src, type, urls, stack } = item;

  return (
    <>
      <div
        className={`flex gap-6 animate-fade-in opacity-0 rounded-lg shadow-lg p-4 bg-white`}
        style={{
          animationDelay: `${delay}s`,
        }}
      >
        <div className="flex flex-col w-4/5 gap-4">
          <h2 className="font-item-title mb-2">{name}</h2>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="[&>ul]:list-disc [&>ul]:pl-5"
          />

          <div className="flex-col">
            <b>Stack:</b>
            <ul className="flex gap-4">
              {stack.map((stackItem) => (
                <li>{stackItem}</li>
              ))}
            </ul>
          </div>

          <div className="flex-col">
            <b>Disponível em:</b>
            <ul className="flex gap-4">
              {urls.map((url) => (
                <li>
                  <a
                    className="cursor-pointer hover:text-green transition-colors inline-flex gap-2"
                    href={url.url}
                    target="_blank"
                  >
                    {url.logo && (
                      <Image
                        src={url.logo}
                        alt={`${url.name}-logo`}
                        width={20}
                        height={20}
                        className="hover:text-green"
                        style={{
                          objectFit: "contain",
                          fill: "green",
                          color: "green",
                        }}
                      />
                    )}

                    {url.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {type === "mobile" && <MobilePreview src={src[0]} type={src[1]} />}
          {type !== "mobile" && <div>default</div>}
        </div>
      </div>
    </>
  );
};
