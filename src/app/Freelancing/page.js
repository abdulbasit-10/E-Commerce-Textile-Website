import Image from "next/image";
import Head from "next/head";
import { FaCheck, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Start Your Freelancing Career</title>
      </Head>

      <main className="bg-white w-full py-20 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#750B4E] italic">
            Start Your Freelancing Career
          </h1>
          <p className="text-gray-600 mt-4">
            Learn how to earn from your skills — on Fiverr, Upwork, and more.
          </p>
        </div>

        {/* Banner */}
        <div className="max-w-[1200px] flex justify-center mb-10">
          <Image
            src="/banner.png"
            alt="Freelancing Banner"
            width={1200}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Top Platforms */}
        <section className="bg-[#F9F6F2] flex flex-col items-center w-full mb-12 py-20">
          <div className="w-[1200px]">
            <h2 className="text-xl text-start md:text-2xl font-Playfair Display text-[#750B4E] mb-6">
            Top Platforms
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto">
            {/* Fiverr */}
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-[33%] border border-[#ECB922]">
              <h3 className="font-bold text-[#750B4E] mb-2">Fiverr</h3>
              <p className="text-sm text-gray-600">
                Offer textile design gigs & earn
              </p>
            </div>

            {/* Upwork */}
            <div className="bg-white p-5 rounded-lg shadow-md border w-full md:w-[33%] border-[#ECB922]">
              <h3 className="font-bold text-[#750B4E] mb-2">Upwork</h3>
              <p className="text-sm text-gray-600">
                Connect with global design clients
              </p>
            </div>

            {/* Behance */}
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-[33%] border border-[#ECB922]">
              <h3 className="font-bold text-[#750B4E] mb-2">Behance</h3>
              <p className="text-sm text-gray-600">
                Showcase your portfolio to the world
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Mentorship Career Help Section */}
        <section className="w-[1200px] text-center">
          <h2 className="text-3xl font-Playfair Display text-[#750B4E] mb-6 text-start">
            Mentorship Career Help
          </h2>

          <ul className="text-left text-gray-700 space-y-3 mb-8">
            <li><span className="text-black font-bold">✓</span> Learn how to create strong gigs and profiles</li>
            <li><span className="text-black font-bold">✓</span> Build a stunning portfolio with real projects</li>
            <li><span className="text-black font-bold">✓</span> Get feedback and support from experts</li>
          </ul>

          {/* Testimonial */}
          <div className="bg-gray-100 text-[#750B4E] text-start px-6 py-8 rounded-md text-sm mb-6">
            <p>
              <span className="font-medium">Kashaf Textile Hub</span> taught me how to earn online.
              I got my first Fiverr client in 1 month! – Areeba
            </p>
            <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#ECB922] text-xl" />
                        ))}
          </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#750B4E] text-white px-7 py-2 rounded-lg transition">
            Start Freelancing Today
          </button>
        </section>
      </main>
    </>
  );
}
