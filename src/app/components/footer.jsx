import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="font-bold text-xl">Kashaf Textile Hub</h2>
          <p className="text-sm mt-3">
            From Digital Design to Real Fabric
          </p>
          <p className="text-xs mt-6 text-gray-300">
            © 2025 Kashaf Textile Hub. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:kashaftextilehub@gmail.com"
                className="hover:underline"
              >
                kashaftextilehub@gmail.com
              </a>
            </li>
            <li>Instagram: @kashaftextilehub</li>
            <li>Facebook: /kashaftextilehub</li>
            <li>LinkedIn: /kashaftextilehub</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/join"
              className="bg-white text-purple-900 px-5 py-2 rounded-md font-medium text-sm hover:bg-gray-100 transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
