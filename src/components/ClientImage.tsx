"use client";

import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ClientImage = ({ src, alt, width, height }: ClientImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
    />
  );
};

export default ClientImage;
