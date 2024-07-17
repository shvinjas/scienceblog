import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl text-orange-400">Blog</h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className=" text-orange-400">
            Home
          </Link>
          <Link href="/about" className=" text-orange-400">
            About
          </Link>
          <Link href="/contact" className="text-orange-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
