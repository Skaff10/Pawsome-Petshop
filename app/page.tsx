import hero from "@/public/hero_section.svg";
import heroMobile from "@/public/hero_mobile.svg";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Image from "next/image";
import Link from "next/link";
import BestSellers from "@/components/BestSellers";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";
import NewsletterBanner from "@/components/NewsletterBanner";

import banner1 from "@/public/deliveryimage1.svg";
import banner2 from "@/public/factimage2.svg";
import banner1mobile from "@/public/deliveryimage_mobilev2.svg";
import banner2mobile from "@/public/factimage_mobile.svg";
const pets = [
  { name: "Cats", id: "cat", src: "/cat.svg" },
  { name: "Dogs", id: "dog", src: "/dog.svg" },
  { name: "Small Pets", id: "ham", src: "/ham.svg" },
];

const Page = () => {
  return (
    <div className="w-full">
      <ImagePlaceholder image1={heroMobile} image2={hero} alt="hero" />

      <section className="pt-16 px-6 max-w-7xl mx-auto w-full">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-10">
          Search by Shop
        </h2>

        <div className="flex justify-around">
          {pets.map((pet) => (
            <Link
              key={pet.id}
              href={`/store?pet=${pet.id}`}
              className="bg-cream rounded-2xl flex flex-col items-center justify-center "
            >
              <Image
                src={pet.src}
                alt={`${pet.name} icon`}
                width={80}
                height={80}
                className="mb-4"
              />
              <span className="font-nunito font-semibold text-espresso">
                {pet.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <BestSellers />
      {/* Full Width Banner 1 */}
      <ImagePlaceholder image1={banner1mobile} image2={banner1} alt="hero" />
      <NewArrivals />
      {/* Full Width Banner 2 */}
      <ImagePlaceholder image1={banner2mobile} image2={banner2} alt="hero" />
      <WhyShopWithUs />
      <Testimonials />
      <NewsletterBanner />
    </div>
  );
};

export default Page;
