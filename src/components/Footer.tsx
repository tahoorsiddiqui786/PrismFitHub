'use client'
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">PrismFitzHub</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Transform your fitness journey with expert trainers and personalized programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Courses</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses/strength" className="text-gray-400 hover:text-white transition">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link href="/courses/yoga" className="text-gray-400 hover:text-white transition">
                  Yoga
                </Link>
              </li>
              <li>
                <Link href="/courses/nutrition" className="text-gray-400 hover:text-white transition">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link href="/courses/hiit" className="text-gray-400 hover:text-white transition">
                  HIIT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Phone</p>
                <p className="text-gray-400">+91 9876 543 210</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <p className="text-gray-400">info@PrismFitzHub.com</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Address</p>
                <p className="text-gray-400">123 Fitness Hub, New Delhi, Delhi 110001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} PrismFitzHub . All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-gray-400 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;