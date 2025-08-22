"use client";

import { useState } from "react";
import Image from "next/image";

export default function UploadDesign() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [size, setSize] = useState("Medium");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <main className="px-6 md:px-20 py-16 bg-[#faf7f0] min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7B1451]">
          Upload Your Design
        </h1>
        <p className="text-gray-600 mt-2">
          Upload your artwork in JPG, PNG, TIFF, PSD, or AI formats
        </p>
      </div>

      {/* Upload Section */}
<div className="bg-white p-8 rounded-xl shadow-md mb-8">
  <div className="border border-gray-200 rounded-lg p-8 text-left">
    <p className="text-[#7B1451] font-medium mb-2">
      Drag & Drop or Browse to Upload
    </p>
    <p className="text-gray-600 text-sm mb-6">
      Accepted formats: JPG, PNG, TIFF, PSD, AI
    </p>

    {/* Hidden input */}
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="hidden"
      id="fileUpload"
    />

    {/* Upload button */}
    <label
      htmlFor="fileUpload"
      className="inline-block bg-[#7B1451] text-white text-sm px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-rose-700 transition"
    >
      Upload Design
    </label>
  </div>
</div>

      {/* Live Preview & Customization */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-8">
        <h2 className="text-lg font-semibold text-[#7B1451] mb-4">
          Live Preview
        </h2>
        <p className="pb-2 text-[#555555]">
            See your design applied on the selected product.
        </p>

        {/* Preview Box */}
        <div className="border border-gray-200 rounded-lg h-40 flex items-center justify-center text-[#555555] mb-6 bg-[#CCCCCC]">
          {preview ? (
            <Image
              src={preview}
              alt="Live Preview"
              width={300}
              height={200}
              className="object-contain"
            />
          ) : (
            <p>Your design preview will appear here</p>
          )}
        </div>

        {/* Print Customization */}
        <div className="space-y-4">
          <p className="font-medium text-gray-700">Print Customization:</p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#7B1451] text-white px-4 py-2 border rounded-lg hover:bg-gray-100 text-sm">
              Select Placement
            </button>
            {["Small", "Medium", "Large"].map((option) => (
              <button
                key={option}
                onClick={() => setSize(option)}
                className={`px-4 py-2 rounded-lg border text-sm transition ${
                  size === option
                    ? "bg-[#ECB922] text-white border-[#7B1451]"
                    : "hover:bg-gray-100"
                }`}
              >
                {option} Size
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-6">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
        <button className="px-6 py-3 bg-white text-[#7B1451] rounded-lg hover:bg-pink-200 transition">
          Modify Design
        </button>
      </div>
    </main>
  );
}
