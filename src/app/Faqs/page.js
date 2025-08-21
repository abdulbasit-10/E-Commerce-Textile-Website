"use client";
import Image from "next/image";

export default function CustomPrintingPage() {
  // FAQ toggle
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What file formats do you accept?",
      answer: "We accept JPG, PNG, TIFF, and PSD files for custom printing.",
    },
    {
      question: "What is the minimum order?",
      answer: "The minimum order is 2 meters of fabric for custom designs.",
    },
    {
      question: "How long does the printing take?",
      answer: "Printing usually takes 5-7 business days depending on the design.",
    },
  ];

  return (
    <div className="w-full">
      {/* ------------------ Hero Section ------------------ */}
      <section className="bg-yellow-400 py-12 px-4 sm:px-8 md:px-16">
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
              src="/fabric.png" // 👈 apna image /public me rakho
              alt="Customized Fabric"
              width={400}
              height={400}
              className="rounded-md w-[250px] sm:w-[300px] md:w-[400px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ------------------ FAQ Section ------------------ */}
      <section className="bg-[#FAF8F6] py-16 px-4 sm:px-8 md:px-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold italic text-[#750B4E]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Find answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#750B4E] rounded-md p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="text-[#750B4E] font-bold text-lg">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

          {/* Support Button */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-[#750B4E] text-white rounded-md text-sm sm:text-base font-medium hover:bg-[#5a083a] transition">
              Need More Help? Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
