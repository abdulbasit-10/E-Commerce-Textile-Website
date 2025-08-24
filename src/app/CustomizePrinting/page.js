import Image from "next/image";

import Link from "next/link";

// Images
import chooseImg from "/public/choose.png";
import choose1 from "/public/choose1.png";
import choose1_2 from "/public/choose1.2.jpg";
import choose2 from "/public/choose2.jpg";
import choose3 from "/public/choose3.png";
import choose4 from "/public/choose4.png";
import choose5 from "/public/choose5.png";
import choose5_1 from "/public/choose5.1.png";
import choose5_2 from "/public/choose5.2.png";
import choose6 from "/public/choose6.png";
import choose7 from "/public/choose7.png";
import choose8 from "/public/choose8.png";
import choose9 from "/public/choose9.png";
import choose9_1 from "/public/choose9.1.png";

export default function CustomizePrinting() {
  return (
    <section className="bg-yellow-500 py-20">
      {/* Hero */}
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

      {/* Navbar */}
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

      {/* Choose Surface Section */}
      <section className="bg-[#FAF7F0] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* grid → 1 col on mobile, 3 cols from sm */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose1}
                alt="Women Dress"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Women Dress</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose2}
                alt="Tote Bag"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Tote Bag</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose3}
                alt="Home sections / Media"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">
                  Theme Selection / Thesis
                </h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose4}
                alt="Sports"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Sports</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose5}
                alt="For Office"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">For Office</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose6}
                alt="For Event Decor"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">
                  For Event Decor
                </h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose7}
                alt="Uniforms"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Uniforms</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose8}
                alt="Interior"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Interior</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={choose9}
                alt="Fabric Rolls"
                className="w-full h-48 lg:h-[400px] object-cover"
              />
              <div className="p-3 text-left">
                <h3 className="text-sm font-bold text-[#7B1451]">Fabric Rolls</h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#ECB922] hover:underline"
                >
                  Select This Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
