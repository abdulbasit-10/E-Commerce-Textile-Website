import Image from "next/image";
import Link from "next/link";
import chooseImg from "/public/choose.png"; // your hero image
import print1 from "/public/print1.png";
import print2 from "/public/print2.png";
import print3 from "/public/print3.png";

export default function SelectPrintingMethod() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#faf7f0] py-20">
        {/* Hero */}
        <div className="px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-[#7B1451] md:whitespace-nowrap">
                Customized Textile Printing
              </h1>
              <p className="text-base md:text-lg text-black">
                Bring your design to life on fabric. Quality, durability, and creativity.
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
            <Link href="/CustomizePrinting" className="flex-1 text-center py-4 hover:text-yellow-300 transition">
              Choose Surface
            </Link>
            <Link href="/CustomizePrinting/select-printing-method" className="flex-1 text-center py-4 hover:text-yellow-300 transition">
              Select Printing Method
            </Link>
            <Link href="/CustomizePrinting/fabric-type" className="flex-1 text-center py-4 hover:text-yellow-300 transition">
              Fabric Type
            </Link>
            <Link href="/CustomizePrinting/upload-design" className="flex-1 text-center py-4 hover:text-yellow-300 transition">
              Upload Design
            </Link>
            <Link href="/CustomizePrinting/estimate-price" className="flex-1 text-center py-4 hover:text-yellow-300 transition">
              Estimate Price
            </Link>
          </nav>
        </div>
      </section>

      {/* Select Printing Method Section */}
      <section className="bg-[#faf7f0] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-[#7B1451] mb-4">
              Select Printing Method
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Explore a wide range of printing services to suit your textile needs.
            </p>
          </div>

          {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {/* Digital Printing */}
  <div className="bg-white p-6 pb-12 rounded-lg shadow hover:shadow-lg transition text-center relative">
    <h3 className="text-lg font-bold text-[#7B1451] mb-3">Digital Printing</h3>
    <p className="text-sm text-gray-600 mb-6">
      High resolution, photorealistic finish, great for small batches.
    </p>
    <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 px-4 py-2 bg-[#7B1451] text-white rounded hover:bg-yellow-500 transition">
      Select this Method
    </button>
  </div>

  {/* Screen Printing */}
  <div className="bg-white p-6 pb-12 rounded-lg shadow hover:shadow-lg transition text-center relative">
    <h3 className="text-lg font-bold text-[#7B1451] mb-3">Screen Printing</h3>
    <p className="text-sm text-gray-600 mb-6">
      Perfect for bold colors, durable prints, and large runs.
    </p>
    <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 px-4 py-2 bg-[#7B1451] text-white rounded hover:bg-yellow-500 transition">
      Select this Method
    </button>
  </div>

  {/* Sublimation */}
  <div className="bg-white p-6 pb-12 rounded-lg shadow hover:shadow-lg transition text-center relative">
    <h3 className="text-lg font-bold text-[#7B1451] mb-3">Sublimation Printing</h3>
    <p className="text-sm text-gray-600 mb-6">
      All-over prints with vibrant colors (best on polyester fabrics).
    </p>
    <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 px-4 py-2 bg-[#7B1451] text-white rounded hover:bg-yellow-500 transition">
      Select this Method
    </button>
  </div>
</div>


          {/* Detailed Sections */}
          <div className="space-y-16">
            {/* Digital */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image src={print1} alt="Digital Printing" width={600} height={600} className="w-full h-64 object-contain rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-[#7B1451] mb-3">Digital Printing</h2>
                <p className="text-gray-700 mb-3">
                  Digital fabric printing is a process that involves printing digital images directly onto fabric using inkjet technology.
                </p>
                <p className="text-sm text-[#ECB922] font-bold">
                  <span className="font-bold">Graphics required:</span>{" "}
                  For a digitally printed design, files should be in{" "}
                  <span className="">.TIFF / .PNG / Digitally created</span>.
                </p>
              </div>
            </div>

            {/* Sublimation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image src={print2} alt="Sublimation Printing" width={600} height={400} className="w-full h-64 object-contain rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-[#7B1451] mb-3">Sublimation Printing</h2>
                <p className="text-gray-700 mb-3">
                  Sublimation printing is a digital printing technology that uses heat to transfer dye into synthetic fabrics.
                </p>
                <p className="text-sm text-[#ECB922] font-bold">
                  <span className="font-bold">Graphics required:</span>{" "}
                  Use high-resolution <span className="">.JPG / .PNG</span> files.
                </p>
              </div>
            </div>

            {/* Screen Printing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image src={print3} alt="Screen Printing" width={600} height={400} className="w-full h-64 object-contain rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-[#7B1451] mb-3">Screen Printing</h2>
                <p className="text-gray-700 mb-3">
                  Digital screen printing is a hybrid screen printing technology that combines traditional techniques with digital printing for precision.
                </p>
                <p className="text-sm text-[#ECB922] font-bold">
                  <span className="font-bold">Graphics required:</span>{" "}
                  Files should be in <span className="">.AI / .EPS / Digitally created</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link href="/CustomizePrinting" className="text-[#7B1451] font-semibold hover:underline">
              ← Back to Choose Surface
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
