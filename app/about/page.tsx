import ImagePlaceholder from "@/components/ImagePlaceholder";
import hero from "@/public/about2.png";
import heroMobile from "@/public/about1.png";

export const metadata = {
  title: "About Us | Pawsome Petshop",
  description:
    "Learn more about Pawsome Petshop, our mission, vision, and why we love serving your furry friends.",
};

const AboutPage = () => {
  return (
    <div className="w-full bg-cream min-h-screen text-espresso">
      {/* Hero Section */}
      <section className="relative w-full">
        <ImagePlaceholder
          image1={heroMobile}
          image2={hero}
          alt="Pawsome Petshop Hero"
        />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-20 px-6 max-w-5xl mx-auto w-full text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
          About Pawsome Petshop
        </h1>
        <p className="font-nunito text-lg md:text-xl text-espresso/80 leading-relaxed mb-12 max-w-3xl mx-auto">
          Welcome to Pawsome Petshop, your ultimate destination for everything
          your furry friends need. We believe that every pet deserves the best
          care, the most delicious treats, and the most comfortable beds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className=" rounded-3xl p-8 shadow-sm border border-sage/20 hover:shadow-md transition-shadow group">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-terracotta">
              Our Mission
            </h3>
            <p className="font-nunito text-espresso/75 leading-relaxed">
              To provide top-quality pet products that enhance the lives of pets
              and their owners. We carefully curate our selection to ensure
              safety, nutrition, and happiness.
            </p>
          </div>

          <div className=" rounded-3xl p-8 shadow-sm border border-sage/20 hover:shadow-md transition-shadow group">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-terracotta">
              Our Vision
            </h3>
            <p className="font-nunito text-espresso/75 leading-relaxed">
              To be the most trusted and loved pet shop community, fostering a
              world where every pet is treated like family.
            </p>
          </div>

          <div className="rounded-3xl p-8 shadow-sm border border-sage/20 hover:shadow-md transition-shadow group">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-terracotta">
              Why Us?
            </h3>
            <p className="font-nunito text-espresso/75 leading-relaxed">
              With years of experience and a genuine love for animals, our team
              is dedicated to offering expert advice and the finest supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetic Banner */}
      <section className="w-full bg-sage/20 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl italic text-teal">
            "Because they are not just pets, they are family."
          </h2>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
