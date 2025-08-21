
export default function AboutSection() {
  return (
    <div className="bg-[#fdfaf5]">
      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-left">
        {/* Heading */}
        <h3 className="text-[#750B4E] text-5xl font-semibold italic mb-2">About</h3>
        <h2 className="text-3xl font-semibold text-[#d58a00] pt-2 mb-6">
          Our Story Mission
        </h2>

        {/* Content */}
        <p className="mb-4 text-gray-700 leading-relaxed">
          Kashaf Textile Hub was born from a vision — to turn creativity into careers.
          In today’s fast-moving digital world, design is not just an art form — it’s a gateway to independence.
          But in Khyber Pakhtunkhwa, many talented youth — especially women — remain disconnected
          from this opportunity due to lack of access to tools, skills, and platforms.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We are the first and only platform in KPK that offers digital textile design education,
          customized printing services, and freelancing support — all under one roof.
          From honing the latest tools to printing original designs on fabric, and even
          launching online careers, we help students turn ideas into income.
        </p>

        {/* Mission */}
        <h3 className="text-xl font-Playfair Display text-[#750B4E] mt-6">Our Mission</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          To empower creative minds with design education, earning opportunities,
          and access to digital tools that can change lives.
        </p>

        {/* Vision */}
        <h3 className="text-xl font-Playfair Display text-[#750B4E] mt-6">Our Vision</h3>
        <p className="mb-8 text-gray-700 leading-relaxed">
          A self-reliant generation of designers and makers from KPK, using their talent
          to lead, inspire, and innovate in Pakistan and beyond.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#8a2c6c] text-white px-6 py-2 rounded-md shadow hover:bg-[#6a004e] transition">
            Explore Courses
          </button>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-10 w-full"></div>

      {/* Footer Banner Quote */}
      <div className="bg-[#f1b400] py-4 text-center px-4 mb-80">
        <p className="text-white font-semibold">
          “Design is freedom. Financial independence is power. And we believe every young woman deserves both.”
        </p>
      </div>
    </div>
  );
}
