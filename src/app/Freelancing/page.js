import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Start Your Freelancing Career</title>
      </Head>

      <main className="bg-white min-h-screen p-20">
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
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/banner.png"
            alt="Freelancing Banner"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Top Platforms */}
        <section className="bg-[#F9F6F2] mb-12 py-20">
          <h2 className="text-xl text-center md:text-2xl font-semibold mb-6">
            Top Platforms
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
            {/* Fiverr */}
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/3 border">
              <h3 className="font-semibold text-pink-700 mb-2">Fiverr</h3>
              <p className="text-sm text-gray-600">
                Offer textile design gigs & earn
              </p>
            </div>

            {/* Upwork */}
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/3 border">
              <h3 className="font-semibold text-green-700 mb-2">Upwork</h3>
              <p className="text-sm text-gray-600">
                Connect with global design clients
              </p>
            </div>

            {/* Behance */}
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/3 border">
              <h3 className="font-semibold text-blue-700 mb-2">Behance</h3>
              <p className="text-sm text-gray-600">
                Showcase your portfolio to the world
              </p>
            </div>
          </div>
        </section>

        {/* Mentorship Career Help Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-Playfair Display text-[#750B4E] mb-6 text-start">
            Mentorship Career Help
          </h2>

          <ul className="text-left text-gray-700 space-y-3 mb-8">
            <li>✔️ Learn how to create strong gigs and profiles</li>
            <li>✔️ Build a stunning portfolio with real projects</li>
            <li>✔️ Get feedback and support from experts</li>
          </ul>

          {/* Testimonial */}
          <div className="bg-gray-100 text-[#750B4E] px-6 py-8 rounded-md text-sm mb-6">
            <p>
              <span className="font-medium">Kashaf Textile Hub</span> taught me how to earn online.
              I got my first Fiverr client in 1 month! – Areeba
            </p>
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
