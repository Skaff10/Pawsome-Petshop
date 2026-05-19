import hero from "@/public/hero_section.svg";
import heroMobile from "@/public/hero_mobile.svg";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Image from "next/image";
import Link from "next/link";

const pets = [
  { name: "Cats", id: "cat", src: "/cat.svg" },
  { name: "Dogs", id: "dog", src: "/dog.svg" },
  { name: "Fish", id: "fish", src: "/fish.svg" },
  { name: "Hamsters", id: "ham", src: "/ham.svg" },
  { name: "Birds", id: "bird", src: "/bird.svg" },
  { name: "Turtles", id: "turtle", src: "/turtle.svg" },
];

const Page = () => {
  return (
    <div className="flex-1 flex flex-col">
      <ImagePlaceholder image1={heroMobile} image2={hero} alt="hero" />

      <section className="py-16 px-6 max-w-7xl mx-auto w-full flex-1">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-10">
          Shop by Pet
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
    </div>
  );
};

export default Page;
