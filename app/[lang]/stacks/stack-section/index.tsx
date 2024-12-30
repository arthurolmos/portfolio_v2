import React from "react";
import { StackItem } from "../stack-item";
import { StackItemType } from "../stack-item/stacks";

interface Props {
  stack: StackItemType;
}

export const StackSection = ({ stack }: Props) => {
  const { main, others } = stack;

  return (
    <section className="flex-col animate-fade-in">
      <div className="flex justify-center gap-8 mb-8">
        {main.map((mainItem) => (
          <StackItem key={mainItem.title} item={mainItem} />
        ))}
      </div>

      <div className="flex gap-8 mb-8 items-center justify-center">
        {others?.map((otherItem) => (
          <p className="drop-shadow-md" key={otherItem}>
            {otherItem}
          </p>
        ))}
      </div>
    </section>
  );
};
