"use client";

import { useState } from "react";
import Image from "next/image";

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
      <section className="bg-yellow-400 py-12 px-8 sm:px-8 md:px-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Side - Text */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-[#750B4E] mb-4 leading-snug">
                    Customized Textile Printing
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
                    Bring your design to life on fabric. Quality, durability, and creativity.
                  </p>
      
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition">
                      Start Customizing
                    </button>
                    <button className="px-6 py-3 bg-white text-[#750B4E] border border-[#750B4E] rounded-md text-sm font-medium hover:bg-gray-100 transition">
                      Explore Fabrics
                    </button>
                  </div>
                </div>
      
                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/fabric.png"
                    alt="Customized Fabric"
                    width={400}
                    height={300}
                    className="w-[250px] sm:w-[300px] md:w-[400px] h-auto object-contain"
                  />
                </div>
              </div>
            </section>

      {/* Steps Navigation */}
      <nav className="bg-[#750B4E] text-white flex flex-wrap justify-center md:justify-between px-6 py-3 text-sm md:text-base">
        <p className="px-3 py-1">Choose Surface</p>
        <p className="px-3 py-1">Select Printing Method</p>
        <p className="px-3 py-1">Fabric Type</p>
        <p className="px-3 py-1">Upload Design</p>
        <p className="px-3 py-1 font-bold">Estimate Price</p>
      </nav>

      {/* Estimate Price Section */}
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
            onChange={(e) => setQuantity(e.target.value)}
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
