import React from "react";

interface Props {
  src: string;
  type: string;
}

export const MobilePreview = ({ src, type }: Props) => {
  return (
    <div className="bg-black p-2 rounded-xl max-w-[240px]">
      <video autoPlay muted loop>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
