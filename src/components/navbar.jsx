"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <nav className="bg-yellow-500 px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <div>
            <Image
            src="logos.svg"
            alt="Logo pic"
            width={50}
            height={50}
            />
          </div>
          <span className="text-[#750B4E] font-bold text-sm tracking-wide">
            KASHAF TEXTILE HUB
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* <ul className="list-none flex"> */}
            <li onClick={() => router.push("/home")} className="list-none cursor-pointer">Home</li>
            <li onClick={() => router.push("/About")} className="list-none cursor-pointer">About</li>
            <li onClick={() => router.push("/Courses")} className="list-none cursor-pointer">Courses</li>
            <li onClick={() => router.push("/Freelancing")} className="list-none cursor-pointer">Freelancing</li>
            <li onClick={() => router.push("/CustomizePrinting")} className="list-none cursor-pointer">Customized Printing</li>
            <li onClick={() => router.push("/Faqs")} className="list-none cursor-pointer">FAQs</li>
          {/* </ul> */}
          <button
          onClick={() => router.push("/EnrollNow")}
          className="bg-[#750B4E] text-white px-4 py-3 rounded-md text-sm font-semibold transition cursor-pointer" 
          >
            Enroll Now
          </button>
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
          <Link href="/Courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/Freelancing" onClick={() => setIsOpen(false)}>Freelancing</Link>
          <Link href="/CustomizePrinting" onClick={() => setIsOpen(false)}>
            Customized Printing
          </Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link
            href="/Enroll"
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

