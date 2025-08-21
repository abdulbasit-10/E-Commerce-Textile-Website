"use client"; // App Router me client component banana hoga

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-purple-900 font-bold text-sm tracking-wide">
            KASHAF TEXTILE HUB
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/freelancing">Freelancing</Link>
          <Link href="/customized-printing">Customized Printing</Link>
          <Link href="/about">About</Link>
          <Link
            href="/enroll"
            className="bg-purple-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-900 transition"
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
