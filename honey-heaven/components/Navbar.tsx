"use client";


{/*import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white w-screen py-3 px-3 md:py-5 md:px-6">
            <p className="text-lg font-bold flex items-center">HONEY HEAVEN</p>
            <div className="w-3.5 h-3.5 bg-amber-50 block md:hidden"></div>
            <ul className="hidden md:flex md:gap-6 md:justify-between md:items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={"/learn-&-visit"}>Learn & Visit</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/contact-and-community"}>Contact & Community</Link>
                <Link href={"/my-account"}>My Account</Link>
            </ul>
        </nav>
    );
}

export default Navbar;*/}


import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 px-6 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0 mr-5">
        <Image
          src="/hh-logo-tt.png"
          alt="HH logo"
          width={60}
          height={60}
          quality={100}
          priority
        />
      </Link>

      <Link href="/" className="text-white hover:text-indigo-500 font-bold">HONEY HEAVEN</Link>

      <div className="hidden md:flex flex-1 items-center justify-center gap-10">
        <Link href="/shop" className="text-white hover:text-indigo-500 font-medium">Shop</Link>
        <Link href="/blog" className="text-white hover:text-indigo-500 font-medium">Blog</Link>
        <Link href="/our-story" className="text-white hover:text-indigo-500 font-medium">Our Story</Link>
        <Link href="/learn-&-visit" className="text-white hover:text-indigo-500 font-medium">Learn & Visit</Link>
        <Link href="/contact-and-community" className="text-white hover:text-indigo-500 font-medium">Contact & Community</Link>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <Link href="/account" className="text-white hover:text-indigo-500 text-sm">Log in</Link>
        <Link href="/account" className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg font-semibold transition">Sign up</Link>
      </div>
      
      <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 z-50 md:hidden">
          <Link href="/" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/our-story" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link href="/learn-&-visit" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Learn & Visit</Link>
          <Link href="/contact-and-community" className="py-2 text-slate-800 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Contact & Community</Link>
          <div className="flex flex-col gap-2 mt-2 w-1/2">
            <Link href="/account" className="text-slate-700 hover:text-indigo-500 text-sm w-full text-center py-2" onClick={() => setMenuOpen(false)}>Log in</Link>
            <Link href="/account" className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg font-semibold w-full text-center transition" onClick={() => setMenuOpen(false)}>
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}