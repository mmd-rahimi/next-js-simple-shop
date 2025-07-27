import React from "react";

interface IProductImageProps {
  image: string;
  title: string;
}

export default function ProductImage({ image, title }: IProductImageProps) {
  return (
    <div className="w-[15rem] h-[15rem] flex items-center justify-center relative md:w-[50%] md:h-full md:sticky md:top-0 md:self-center">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt={title}
        loading="lazy"
      />
    </div>
  );
}
