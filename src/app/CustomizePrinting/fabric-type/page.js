import Image from "next/image";
import Link from "next/link";
import chooseImg from "/public/choose.png"; // make sure this exists

// Fabric options
const fabrics = [
  { name: "Cotton", desc: "Soft, breathable, perfect for clothing." },
  { name: "Silk", desc: "Luxurious fabric with natural sheen." },
  { name: "Linen", desc: "Cool & lightweight, ideal for summer wear." },
  { name: "Polyester", desc: "Durable & wrinkle-resistant fabric." },
  { name: "Lawn Fabric", desc: "Lightweight & breathable cotton blend." },
  { name: "Viscose", desc: "Soft, smooth texture, good for drapes." },
];

// Gallery images
const fabricImages = [
  "/fabric1.png",
  "/fabric2.png",
  "/fabric3.png",
  "/fabric4.png",
  "/fabric5.png",
  "/fabric6.png",
];

export default function FabricType() {
  return (
    <main>
      {/* ✅ Hero Section */}
      <section className="bg-[#faf7f0] py-20">
        <div className="px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-[#7B1451] md:whitespace-nowrap">
                Customized Textile Printing
              </h1>
              <p className="text-base md:text-lg text-black">
                Bring your design to life on fabric. Quality, durability, and
                creativity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-[#2c2c2c] text-white rounded-md hover:bg-black transition">
                  Start Customizing
                </button>
                <button className="px-6 py-3 bg-[#ECB922] text-gray-900 rounded-md hover:bg-yellow-500 transition">
                  Explore Fabrics
                </button>
              </div>
            </div>

            {/* Right → responsive image */}
            <div className="flex-1 flex justify-center md:justify-end md:-mr-20">
              <Image
                src={chooseImg}
                alt="Customized textile sample"
                className="w-3/4 sm:w-2/3 md:w-full max-w-sm rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Navbar Steps */}
      <div className="bg-[#750B4E] w-full mt-10 overflow-x-auto">
        <nav className="flex w-full text-white text-sm md:text-base font-medium min-w-max">
          <Link
            href="/CustomizePrinting"
            className="flex-1 text-center py-4 hover:text-yellow-300 transition"
          >
            Choose Surface
          </Link>
          <Link
            href="/CustomizePrinting/select-printing-method"
            className="flex-1 text-center py-4 hover:text-yellow-300 transition"
          >
            Select Printing Method
          </Link>
          <Link
            href="/CustomizePrinting/fabric-type"
            className="flex-1 text-center py-4 hover:text-yellow-300 transition"
          >
            Fabric Type
          </Link>
          <Link
            href="/CustomizePrinting/upload-design"
            className="flex-1 text-center py-4 hover:text-yellow-300 transition"
          >
            Upload Design
          </Link>
          <Link
            href="/CustomizePrinting/estimate-price"
            className="flex-1 text-center py-4 hover:text-yellow-300 transition"
          >
            Estimate Price
          </Link>
        </nav>
      </div>

      {/* ✅ Fabric Selection Header */}
      <div className="text-center mt-16 mb-12">
        <h2 className="text-3xl font-bold text-[#7B1451]">Select Your Fabric</h2>
        <p className="text-gray-600 mt-2">
          Choose from a variety of fabrics that best suit your design
        </p>
      </div>

      {/* ✅ Fabric Options Grid */}
      <section className="px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-bold text-[#7B1451]">
                {fabric.name}
              </h3>
              <p className="text-gray-600 mt-2">{fabric.desc}</p>
            </div>
            <Link
              href="#"
              className="mt-4 inline-block bg-[#7B1451] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition"
            >
              Select This Fabric
            </Link>
          </div>
        ))}
      </section>
{/* ✅ Fabric Gallery */}
<section className="px-6 md:px-20 pb-20">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {fabricImages.map((src, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-lg shadow-sm"
      >
        <Image
          src={src}
          alt={`Fabric ${index + 1}`}
          width={300}
          height={300}
          className="w-full md:h-80 h-48 object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
