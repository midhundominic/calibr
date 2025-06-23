// FILE: src/components/Header.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <div className="flex items-center gap-10">
  <Image
    src="/assets/logo.svg"
    alt="Techpool Logo"
    width={160}
    height={40}
    priority
  />
  
  {/* Desktop Nav */}
  <nav className="hidden md:flex gap-10">
    <a href="/" className="text-sm font-medium text-[#0C1D37] hover:text-[#1E78FF]">Home</a>
    <a href="#about" className="text-sm font-medium text-[#0C1D37] hover:text-[#1E78FF]">About</a>
    <a href="#pricing" className="text-sm font-medium text-[#0C1D37] hover:text-[#1E78FF]">Pricing</a>
    <a href="#pages" className="text-sm font-medium text-[#0C1D37] hover:text-[#1E78FF]">Pages</a>
  </nav>
</div>

{/* Mobile Menu Toggle Button */}
<div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
    <svg
      className="w-6 h-6 text-[#0C1D37]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 px-6 py-8 md:hidden"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)} className="text-[#0C1D37]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <a href="/" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]" onClick={() => setIsOpen(false)}>About</a>
              <a href="#pricing" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#pages" className="text-lg font-medium text-[#0C1D37] hover:text-[#1E78FF]" onClick={() => setIsOpen(false)}>Pages</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
