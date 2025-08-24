import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 px-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
    {/* Left Side - Text + Buttons */}
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold text-[#750B4E] mb-6 italic">
        From Digital Designs to Real Fabric
      </h1>
      <p>Empowering Creativity Through Education & Custom Printing </p>
      <div className="flex justify-center md:justify-start gap-6 mt-8">
        <button className="px-10 py-3 bg-[#750B4E] text-white rounded-md hover:bg-purple-900 transition">
          Explore More
        </button>
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition">
          Custom Your Print
        </button>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
      <Image
        width={880}
        height={214}
        alt="hero section"
        src="/hero-section-1.png"
        className="rounded-lg"
      />
    </div>

  </div>
</section>


      {/* Why Section */}
      <section className="py-16 px-5 pt-15 bg-[#F9F7F0] text-center">
        <h1 className="text-[#750B4E] text-4xl font-semibold italic">Why We Started Kashaf Textile Hub</h1>
        <p className="text-lg text-gray-700 py-16">
          Kashaf Textile Hub is a creative platform that offers digital textile
          printing, custom design solutions, and hands-on design education. We
          serve students, startups, and women creators in KPK and beyond.
        </p>
      </section>

      {/* White Gap */}
      <div className="bg-white h-10 w-full"></div>

      {/* Core Services Section */}
      <section className="bg-[#F9F7F0] py-16 px-5">
        <h2 className="text-center text-4xl font-semibold text-[#750B4E] italic mb-10">
          Our Core Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
              width={200} 
              height={200} 
              src="/design-service.png"
              alt="Digital Textile Design"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-[#750B4E] text-lg font-bold mb-2">
              Digital Textile Design
            </h3>
            <p className="text-[#2C2C2C] text-sm">
              Learn digital textile design — Explore Courses
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
            width={200} 
              height={200}
              src="/freelance-design.png"
              alt="Fabric Printing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-[#750B4E] text-lg font-bold mb-2">
              Fabric Printing
            </h3>
            <p className="text-[#2C2C2C] text-sm">
              Get your designs printed. Visit Our Designs
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
            width={200} 
              height={200}
              src="/fabric-printing.png"
              alt="Sell or Freelance Design"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-[#750B4E] text-lg font-bold mb-2">
              Sell OR Freelance Design
            </h3>
            <p className="text-[#2C2C2C] text-sm">
              Work for global clients.Launch Your Career
            </p>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-10 w-full"></div>

      {/* How It Works */}
      <section className="py-12 text-center bg-[#F9F7F0]">
        <h2 className="text-2xl font-serif text-[#6a0033] mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#f1b400] text-white font-bold px-6 py-3 rounded-md shadow">
            Join Our Platform
          </button>
          <button className="bg-[#8a2c6c] text-white font-bold px-6 py-3 rounded-md shadow">
            Learn Design Skills
          </button>
          <button className="bg-[#b6bf00] text-white font-bold px-6 py-3 rounded-md shadow">
            Print Your Work
          </button>
          <button className="bg-[#333333] text-white font-bold px-6 py-3 rounded-md shadow">
            Sell or Freelance
          </button>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-10 w-full"></div>

      {/* Testimonials */}
      <section className="py-12 text-center bg-[#F9F7F0]">
        <h2 className="text-2xl font-serif text-[#6a0033] mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md p-6 w-64 text-left">
            <p className="italic">
              Kashaf Textile Hub transformed my design into beautiful fabric!
              The process was so smooth and professional.
            </p>
            <span className="block mt-4 text-[#8a2c6c] font-bold">
              — Ayesha, Fashion Student
            </span>
          </div>
          <div className="bg-white shadow-md p-6 w-64 text-left">
            <p className="italic">
              The custom printing and design guidance helped launch my clothing
              brand. Highly recommend their services!
            </p>
            <span className="block mt-4 text-[#8a2c6c] font-bold">
              — Fatima, Startup Owner
            </span>
          </div>
          <div className="bg-white shadow-md p-6 w-64 text-left">
            <p className="italic">
              Kashaf Textile Hub transformed my design into beautiful fabric!
              The process was so smooth and professiona
            </p>
            <span className="block mt-4 text-[#8a2c6c] font-bold">
              — Ayesha, Fashion Student
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}