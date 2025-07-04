"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const timerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleLongPressStart = () => {
    timerRef.current = setTimeout(() => {
      router.push("/admin/register");
    }, 1200);
  };

  const handleLongPressEnd = () => {
    clearTimeout(timerRef.current);
  };

  const handleDoubleClick = () => {
    clearTimeout(timerRef.current); // cancel long press if double click happens
    router.push("/admin/login");
  };

  return (
    <nav className="bg-black text-gold w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <span
          className="text-xl font-bold cursor-pointer"
          onMouseDown={handleLongPressStart}
          onMouseUp={handleLongPressEnd}
          onTouchStart={handleLongPressStart}
          onTouchEnd={handleLongPressEnd}
          onDoubleClick={handleDoubleClick}
        >
          SelfBoss Foundation
        </span>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link className="hover:text-white" href="/">Home</Link>
          <Link className="hover:text-white" href="/about">About us</Link>
          <Link className="hover:text-white" href="/past-events">Events</Link>
          <a href="#ProgramsSection" onClick={(e) => handleScroll(e, "ProgramsSection")} className="hover:text-white">
            Programs
          </a>
          <a href="#SupportSection" onClick={(e) => handleScroll(e, "SupportSection")} className="hover:text-white">
            Support
          </a>
          <a href="#LegalitySection" onClick={(e) => handleScroll(e, "LegalitySection")} className="hover:text-white">
            Legality
          </a>
          <a href="#ImpactSection" onClick={(e) => handleScroll(e, "ImpactSection")} className="hover:text-white">
            Impact
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-3 text-gold font-medium">
          <Link className="hover:text-white" href="/">Home</Link>
          <Link className="hover:text-white" href="/about">About us</Link>
          <Link className="hover:text-white" href="/past-events">Events</Link>
          <a href="#ProgramsSection" onClick={(e) => handleScroll(e, "ProgramsSection")} className="block hover:text-white">
            Programs
          </a>
          <a href="#SupportSection" onClick={(e) => handleScroll(e, "SupportSection")} className="block hover:text-white">
            Support
          </a>
          <a href="#LegalitySection" onClick={(e) => handleScroll(e, "LegalitySection")} className="block hover:text-white">
            Legality
          </a>
          <a href="#ImpactSection" onClick={(e) => handleScroll(e, "ImpactSection")} className="block hover:text-white">
            Impact
          </a>
        </div>
      )}
    </nav>
  );
}
