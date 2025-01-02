import React from "react";
import { DictType, PortfolioItemType } from "../../types";
import { PortfolioItem } from "../portfolio-item";

interface Props {
  dict: DictType;
}

export const PortfolioContainer = ({ dict }: Props) => {
  const portfolioItems = (dict.portfolio.items as PortfolioItemType[]).map(
    (item, index) => <PortfolioItem index={index} item={item} />
  );

  return <div className="flex flex-col gap-6">{portfolioItems}</div>;
};
