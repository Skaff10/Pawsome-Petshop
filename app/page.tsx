import hero from "@/public/hero_section.svg";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[450px] ">
      <Image src={hero} alt="hero"  className="object-cover" priority />
    </div>
  );
};

export default Page;