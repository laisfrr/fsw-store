import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      className="h-auto w-full"
      sizes="100vw"
      height={0}
      width={0}
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
