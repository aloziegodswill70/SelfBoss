"use client";

import { useCallback } from "react";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollTo = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-black text-gold py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SelfBoss Foundation</h3>
          <p>
            Empowering Nigerian youth to become enterprising, innovative, and self-reliant through awareness and action.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
               <Link href="/SelfBoss" className="hover:underline">SelfBoss</Link>
            </li>
            <li>
              <a href="#ProgramsSection" onClick={(e) => scrollTo(e, "ProgramsSection")} className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#SupportSection" onClick={(e) => scrollTo(e, "SupportSection")} className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#LegalitySection" onClick={(e) => scrollTo(e, "LegalitySection")} className="hover:underline">
                Legality
              </a>
            </li>
            <li>
              <a href="#ImpactSection" onClick={(e) => scrollTo(e, "ImpactSection")} className="hover:underline">
                Impact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: info@selfbosspersonnel.co.uk</p>
          <p>Phone: +234 7043202431</p>
          <p>Location: Aba, Abia State, Nigeria</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/16T6pboYx4/?mibextid=wwXifr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/selfbossfoundation?igsh=azZ4dTljeXFjOWMx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white border-t border-gold pt-6">
        &copy; {new Date().getFullYear()} SelfBoss Youth Enterprising Foundation. All rights reserved. Created by Alozie Godswill
      </div>
    </footer>
  );
}
