import React from "react";
import { MobilePreview } from "../../components/mobile-preview";
import { DictType } from "../../types";

interface Props {
  index: number;
  item: any;
  dict: DictType;
}

export const PortfolioItem = async ({ index, item }: Props) => {
  const delay = index * 0.2;

  const { name, description, src, type, urls } = item;

  return (
    <>
      <div
        className={`flex gap-6 animate-fade-in opacity-0 rounded shadow-lg p-4`}
        style={{
          animationDelay: `${delay}s`,
        }}
      >
        <div className="flex flex-col w-4/5">
          <h3>{name}</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eaque cupiditate consequuntur consectetur enim velit error beatae,
            provident, molestiae, quae dolor? Nihil a nesciunt iste rerum
            quisquam porro autem laudantium.
          </p>
        </div>

        <div>
          {type === "mobile" && (
            <MobilePreview src="/videos/chucktcg.mp4" type="video/mp4" />
          )}
          {type !== "mobile" && <div>default</div>}
        </div>
      </div>
    </>
  );
};
