"use client"; // App Router me client component banana hoga

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <nav className="bg-[#ECB922] px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
            src="/logos.svg"  // 👈 apna logo public folder me daalo e.g. /public/logo.png
            alt="Kashaf Textile Hub Logo"
            width={100}       // apne hisaab se size adjust karo
            height={100}
            className="rounded-full"
            />
          </div>
          <span className="text-[#750B4E] font-bold text-sm tracking-wide">
            KASHAF TEXTILE HUB
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* <ul className="list-none flex"> */}
            <li onClick={() => router.push("/home")} className="list-none">Home</li>
            <li onClick={() => router.push("/about")} className="list-none">About</li>
            <li onClick={() => router.push("/courses")} className="list-none">Courses</li>
            <li onClick={() => router.push("/freelancing")} className="list-none">Freelancing</li>
            <li onClick={() => router.push("/customized printing")} className="list-none">Customized Printing</li>
            <li onClick={() => router.push("/faqs")} className="list-none">FAQs</li>
          {/* </ul> */}
          <Link
            href="/enroll"
            className="bg-[#750B4E] text-white px-4 py-3 rounded-md text-sm font-semibold transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-purple-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-xl font-bold">✖</span>
          ) : (
            <span className="text-xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-sm font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/freelancing" onClick={() => setIsOpen(false)}>Freelancing</Link>
          <Link href="/customized-printing" onClick={() => setIsOpen(false)}>
            Customized Printing
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link
            href="/enroll"
            onClick={() => setIsOpen(false)}
            className="bg-purple-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-900 transition"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}

