"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import chooseImg from "/public/choose.png"; // ✅ hero image

export default function EstimatePage() {
  const [fabric, setFabric] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);

  const pricePerMeter = 12.5;

  const handleEstimate = () => {
    if (fabric && size && quantity) {
      setPrice(quantity * pricePerMeter);
    } else {
      setPrice(0);
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FDFCF9]">
      {/* ✅ Hero Section */}
      <section className="bg-[#ECB922] py-20">
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

      {/* ✅ Navbar */}
      <div className="bg-[#750B4E] w-full overflow-x-auto">
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

      {/* ✅ Estimate Price Section */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#750B4E]">
            Estimate Your Price
          </h2>
          <p className="text-black mt-2 text-xl">
            Choose fabric, size, and quantity to get an instant price estimate.
          </p>
        </header>

        <div className="bg-[#F9F7F0] w-full py-12 px-6">
          <div className="space-y-6">
            {/* Fabric */}
            <select
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#750B4E]"
            >
              <option value="">Select Fabric</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="polyester">Polyester</option>
            </select>

            {/* Size */}
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#750B4E]"
            >
              <option value="">Select Size</option>
              <option value="small">Small (1m)</option>
              <option value="medium">Medium (2m)</option>
              <option value="large">Large (3m)</option>
            </select>

            {/* Quantity */}
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e?.target?.value)}
              placeholder="Select Quantity"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#750B4E]"
            />

            {/* Price */}
            <div className="w-full p-3 border rounded-md bg-gray-50">
              <p className="text-gray-700">
                Estimated Price:{" "}
                <span className="font-semibold">
                  {price > 0 ? `$${price.toFixed(2)}` : "—"}
                </span>{" "}
                <span className="text-sm text-gray-500">
                  (Rs: {pricePerMeter} per meter)
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end">
              <button
                onClick={handleEstimate}
                className="bg-[#750B4E] text-white px-6 py-2 rounded-md shadow hover:bg-[#5a083b] transition"
              >
                Process to Checkout
              </button>
              <button className="bg-white text-[#750B4E] border border-[#750B4E] px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Modify Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
