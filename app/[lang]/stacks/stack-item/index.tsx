import Image from "next/image";
import React from "react";

interface Props {
  item: {
    title: string;
    src: string;
  };
}

export const StackItem = ({ item }: Props) => {
  const { title, src } = item;

  return (
    <div className="flex flex-col justify-center items-center rounded shadow-md p-4 gap-4">
      <div className="w-24 h-20">
        <Image
          src={src}
          alt={title}
          style={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
          }}
          width={100}
          height={100}
        />
      </div>

      <p className="text-center">{title}</p>
    </div>
  );
};
