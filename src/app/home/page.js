import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          From Digital Designs to Real Fabric
        </h1>
        <div className="flex justify-center gap-6 mt-8">
          <button className="px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition">
            Explore More
          </button>
          <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition">
            Custom Your Print
          </button>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16 px-5 text-center">
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Kashaf Textile Hub is a creative platform that offers digital textile
          printing, custom design solutions, and hands-on design education. We
          serve students, startups, and women creators in KPK and beyond.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="bg-gray-100 py-16 px-5">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
          Our Core Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
              width={200} 
              height={200} 
              src="/design-service.jpg"
              alt="Digital Textile Design"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-purple-900 text-lg font-bold mb-2">
              Digital Textile Design
            </h3>
            <p className="text-gray-600 text-sm">
              Learn digital textile design — Explore Courses
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
            width={200} 
              height={200}
              src="/fabric-printing.jpg"
              alt="Fabric Printing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-purple-900 text-lg font-bold mb-2">
              Fabric Printing
            </h3>
            <p className="text-gray-600 text-sm">
              Get your designs printed. Visit Our Designs
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-5 w-72 text-center">
            <Image
            width={200} 
              height={200}
              src="/freelance-design.jpg"
              alt="Sell or Freelance Design"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-purple-900 text-lg font-bold mb-2">
              Sell OR Freelance Design
            </h3>
            <p className="text-gray-600 text-sm">
              Work for global clients. Launch Your Career
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
