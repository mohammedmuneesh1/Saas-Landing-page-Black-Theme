"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineThunderbolt,
  AiOutlineAppstore,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "#", icon: <AiOutlineHome size={16} /> },
  {
    label: "Features",
    href: "#features",
    icon: <AiOutlineThunderbolt size={16} />,
  },
  {
    label: "Integrations",
    href: "#integrations",
    icon: <AiOutlineAppstore size={16} />,
  },
  {
    label: "FAQs",
    href: "#faqs",
    icon: <AiOutlineQuestionCircle size={16} />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <section className="relative z-10 py-5">
        <div className="custom-layout">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center border border-white/10 rounded-full bg-white/[0.03] backdrop-blur-md px-2 py-2.5">
            {/* LOGO */}
            <div>
              <Image
                src={logoImage}
                alt="Logo"
                className="h-8 md:h-auto w-auto"
                priority
              />
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center justify-center">
              <nav className="flex gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-end items-center gap-2">
              <Button
                variant="secondary"
                className="hidden md:inline-flex items-center text-sm"
              >
                Log In
              </Button>

              <Button
                variant="primary"
                className="hidden md:inline-flex items-center text-sm"
              >
                Sign Up
              </Button>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/10 rounded-full p-2 text-white transition-all"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <AiOutlineMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm z-50 flex flex-col p-6 bg-[rgba(13,13,25,0.97)] backdrop-blur-xl border-l border-white/10 
          transition-transform duration-300 
          ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <Image
            src={logoImage}
            alt="Logo"
            className="h-8 w-auto"
            priority
          />

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-all"
            aria-label="Close menu"
          >
            <AiOutlineClose size={18} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl px-4 py-3 transition-all"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10">
                {link.icon}
              </span>

              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <Button
            variant="secondary"
            className="w-full justify-center"
          >
            Log In
          </Button>

          <Button
            variant="primary"
            className="w-full justify-center"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}