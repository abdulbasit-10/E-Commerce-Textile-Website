import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaStar } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Textile Designing",
      description: "Learn basics of pattern making, color theory, and software.",
      link: "/courses/textile-designing",
    },
    {
      id: 2,
      title: "Digital Printing",
      description: "Master seamless repeats, motifs, and layouts.",
      link: "/courses/digital-printing",
    },
    {
      id: 3,
      title: "Fashion Illustration",
      description: "Build your freelance career on Fiverr, Upwork & more.",
      link: "/courses/fashion-illustration",
    },
  ];

  return (
    <main>
      {/* ================= Top Section ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Heading */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#750B4E]">
            Explore Our Digital Textile Courses
          </h1>
          <p className="text-lg text-black">
            Learn industry-level skills in design, color, repeat patterns, and
            more.
          </p>
        </header>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/Group 123.png"
            alt="Illustration of textile courses"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Popular Courses */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-[#750B4E] text-center">
            Our Popular Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <article
                key={course.id}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between text-left"
              >
                <h3 className="text-xl font-bold text-[#750B4E] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#2C2C2C] mb-4">{course.description}</p>
                <Link
                  href={course.link}
                  className="text-[#ECB922] font-bold hover:underline"
                >
                  View Course →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Learn With Us Section ================= */}
      <section className="bg-[#F9F7F0] w-full py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {/* Section Heading */}
          <h2 className="text-3xl font-semibold text-[#750B4E] text-center">
            Why Learn With Kashaf Textile Hub?
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 text-lg text-[#2C2C2C]">
            <li className="flex items-center gap-3">
              <FaCheck className="text-[#2C2C2C]" /> Women-led platform in KPK
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-[#2C2C2C]" /> Local printing & real-life projects
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-[#2C2C2C]" /> AI-based tools for modern design
            </li>
          </ul>

          {/* Testimonial */}
          <blockquote className="bg-white shadow-md rounded-2xl p-8">
            <p className="text-xl italic text-[#2C2C2C] mb-4">
              “After joining this hub, I started earning with my designs!” –{" "}
              <span className="font-semibold">Zoya</span>
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#ECB922] text-2xl" />
              ))}
            </div>
          </blockquote>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-[#750B4E] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#5a083b] transition">
              Join Our Courses Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
