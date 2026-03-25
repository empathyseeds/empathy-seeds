"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    menuRef.current?.removeAttribute("open");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[80]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="font-semibold text-base text-gray-800">
            Empathy Seeds
          </span>
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <details ref={menuRef} className="relative md:hidden group">
          <summary className="flex h-11 w-11 list-none items-center justify-center rounded-full text-gray-800 cursor-pointer select-none touch-manipulation [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Toggle menu</span>
            <Menu
              size={24}
              aria-hidden="true"
              className="block group-open:hidden"
            />
            <X
              size={24}
              aria-hidden="true"
              className="hidden group-open:block"
            />
          </summary>

          <div className="fixed inset-0 z-[70] hidden group-open:block">
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-black/40"
              onClick={closeMenu}
            />

            <div className="absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6">
              <nav className="mt-14 flex flex-col space-y-4 text-gray-700 font-medium">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
                <Link href="/articles" onClick={closeMenu}>
                  Articles
                </Link>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
