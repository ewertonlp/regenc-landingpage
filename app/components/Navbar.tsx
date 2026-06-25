"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Funcionalidades", href: "#features" },
    { name: "Diferencial", href: "#beforeAfter" },
    
  ];

  return (
  
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "py-4 bg-[#020617]/90 backdrop-blur-md border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <div >
          <Link href="/" className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Image
              src="/regenc_logo.png"
              width={48}
              height={48}
              alt="Regenc Logo"
            />
          </div>
          <span className="text-2xl font-medium tracking-wide text-white leading-tight">
            regenc
          </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
                href="https://tally.so/r/zxGrK0"
                target="_blank"
                rel="noopener noreferrer"
                 className="w-full px-5 py-3 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all inline-block cursor-pointer"
              >
                Acesso VIP
              </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <IoClose size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020617]  overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8 text-lg font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://tally.so/r/zxGrK0"
                target="_blank"
                rel="noopener noreferrer"
                 className="w-full px-5 py-3 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all inline-block cursor-pointer"
              >
                Acesso VIP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

  );
}
