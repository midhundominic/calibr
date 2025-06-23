"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            <a
              href="/"
              className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]"
            >
              Pricing
            </a>
            <div className="relative group">
         
              <button className="flex items-center gap-1 text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">
                Pages
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

           
              <div className="absolute top-full -left-40 mt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg rounded-xl py-8 px-10 z-50 w-[650px] flex justify-between">
             
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">
                    Menu
                  </h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#0F086A]">
                    <a href="#" className="hover:text-[#1E78FF]">
                      Sales home
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Blog
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Home
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Blog post
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      About
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Careers
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Pricing
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Careers single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Pricing single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Integrations
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Features
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Integration single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Contact
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Coming soon
                    </a>
                  </div>
                </div>

           
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">
                    Utility Pages
                  </h3>
                  <div className="flex flex-col gap-2 text-[#0F086A]">
                    <a href="#" className="hover:text-[#1E78FF]">
                      Start Here
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Style Guide
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      404 Not Found
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Password protected
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Licenses
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#1E78FF] underline font-semibold text-[#1E78FF]"
                    >
                      More Webflow Templates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <a
            href="#cart"
            className="text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]"
          >
            Cart(0)
          </a>
          <div className="hidden md:flex absolute pt-6 pb-6 right-20">
            <Button text="Get started" href="/" />
          </div>
        </div>

    
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#0C1D37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 px-6 py-8 md:hidden"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0C1D37]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <a
                href="/"
                className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <div className="relative group">
             
              <button className="flex items-center gap-1 text-lg font-medium text-[#0F086A] hover:text-[#1E78FF]">
                Pages
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

           
              <div className="absolute top-full -left-40 mt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg rounded-xl py-8 px-10 z-50 w-[650px] flex justify-between">
             
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">
                    Menu
                  </h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#0F086A]">
                    <a href="#" className="hover:text-[#1E78FF]">
                      Sales home
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Blog
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Home
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Blog post
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      About
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Careers
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Pricing
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Careers single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Pricing single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Integrations
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Features
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Integration single
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Contact
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Coming soon
                    </a>
                  </div>
                </div>

           
                <div>
                  <h3 className="text-lg font-semibold text-[#0F086A] mb-4">
                    Utility Pages
                  </h3>
                  <div className="flex flex-col gap-2 text-[#0F086A]">
                    <a href="#" className="hover:text-[#1E78FF]">
                      Start Here
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Style Guide
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      404 Not Found
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Password protected
                    </a>
                    <a href="#" className="hover:text-[#1E78FF]">
                      Licenses
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#1E78FF] underline font-semibold text-[#1E78FF]"
                    >
                      More Webflow Templates
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
