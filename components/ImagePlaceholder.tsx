import Image from "next/image";
import { StaticImageData } from "next/image";

const ImagePlaceholder = ({
  image1,
  image2,
  alt,
}: {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  alt: string;
}) => {
  const src1 = typeof image1 === "string" ? image1 : image1.src;
  const src2 = typeof image2 === "string" ? image2 : image2.src;

  return (
    <div className="w-full">
      {/* Mobile hero */}
      <img src={src1} alt={alt} className="w-full h-auto sm:hidden" />
      {/* Desktop hero */}
      <img src={src2} alt={alt} className="w-full h-auto hidden sm:block" />
    </div>
  );
};

export default ImagePlaceholder;
