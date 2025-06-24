"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white"
    >
      <div className="max-w-7xl mx-auto pt-10 pb-10 px-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className="w-[120px] md:w-[199px]">
            <Image
              src="/assets/logo.svg"
              alt="Techpool Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex gap-10">
            <Link href="/" className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">Home</Link>
            <Link href="#about" className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">About</Link>
            <Link href="#pricing" className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">Pricing</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">
                Pages
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-40 mt-4 bg-white shadow-lg rounded-xl py-8 px-10 z-50 w-[650px] flex justify-between opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">Menu</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#0F086A]">
                  <Link href="#" className="hover:text-[#1E78FF]">Sales home</Link>
                  <Link href="#" className="hover:text-[#1E78FF]">Blog</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Home</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Blog post</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">About</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Careers</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Pricing</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Careers single</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Pricing single</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Integrations</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Features</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Integration single</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Contact</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Coming soon</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">Utility Pages</h3>
                  <div className="flex flex-col gap-2 text-[#0F086A]">
                    <Link href="#" className="hover:text-[#1E78FF]">Start Here</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Style Guide</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">404 Not Found</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Password protected</Link>
                    <Link href="#" className="hover:text-[#1E78FF]">Licenses</Link>
                    <Link href="#" className="hover:text-[#1E78FF] underline font-semibold text-[#1E78FF]">More Webflow Templates</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Link href="#cart" className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">Cart(0)</Link>
        </div>

        <div className="hidden md:block">
          <Button text="Get started" href="/" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none w-[60px] h-[60px] rounded-2xl bg-[#534FFF] flex items-center justify-center"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-[100px] left-0 w-full bg-white z-40 px-6 py-6 overflow-y-auto h-[calc(100vh-100px)]"
          >
            <nav className="flex flex-col gap-6">
              <Link href="/" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]">Home</Link>
              <Link href="#about" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]">About</Link>
              <Link href="#pricing" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]">Pricing</Link>
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]"
                  onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
                >
                  <span>Pages</span>
                  <ChevronDown className={`transition-transform duration-300 ${isMobilePagesOpen ? "rotate-180" : ""}`} size={20} />
                </button>
                <AnimatePresence>
                  {isMobilePagesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-2 ml-2"
                    >
                      <h3 className="text-md font-semibold text-[#0F086A] mb-2">Menu</h3>
                      <div className="flex flex-col gap-1 text-[#0F086A] text-base">
                        <Link href="#">Sales home</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Home</Link>
                        <Link href="#">Blog post</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Careers single</Link>
                        <Link href="#">Pricing single</Link>
                        <Link href="#">Integrations</Link>
                        <Link href="#">Features</Link>
                        <Link href="#">Integration single</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Coming soon</Link>
                      </div>
                      <h3 className="text-md font-semibold text-[#0F086A] mt-4 mb-2">Utility Pages</h3>
                      <div className="flex flex-col gap-1 text-[#0F086A] text-base">
                        <Link href="#">Start Here</Link>
                        <Link href="#">Style Guide</Link>
                        <Link href="#">404 Not Found</Link>
                        <Link href="#">Password protected</Link>
                        <Link href="#">Licenses</Link>
                        <Link href="#" className="hover:text-[#1E78FF] underline font-semibold text-[#1E78FF]">More Webflow Templates</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
