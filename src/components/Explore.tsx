'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const menuLinks = [
  { href: "/", label: "Sales home" },
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/pricing-single", label: "Pricing single" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/blog-post", label: "Blog post" },
  { href: "/careers", label: "Careers" },
  { href: "/careers-single", label: "Careers single" },
  { href: "/integrations", label: "Integrations" },
  { href: "/integrations-single", label: "Integrations Single" },
  { href: "/coming-soon", label: "Coming Soon" },
];

const menuContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const iconClass =
    'text-[#534FFF] bg-[#f4f4ff] p-1.5 rounded-md transition-all duration-300'

  const linkClass =
    'text-sm text-[#4B4E68] hover:text-[#534FFF] transition-all duration-300'

  return (
    <motion.footer
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={fadeUp.viewport}
      className="bg-white px-4 md:px-8 lg:px-16 py-16 text-[#0F086A]"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-7xl text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image
              src="/assets/logo.svg"
              alt="Techpool X"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-md text-[#4B4E68] max-w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doin
              tempor incididunt labore et magna
            </p>
          </div>


          <div>
            <h4 className="font-semibold text-md mb-3">Menu</h4>
            <motion.div
              className="grid grid-cols-2 gap-y-3 gap-x-4 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={menuContainer}
            >
              {menuLinks.map((link) => (
                <motion.div key={link.href + link.label} variants={menuItem}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>


          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-semibold text-md mb-3">Utility Pages</h4>
            <Link href="/start-here" className={linkClass}>Start Here</Link>
            <Link href="/style-guide" className={linkClass}>Style guide</Link>
            <Link href="/404" className={linkClass}>404 Not Found</Link>
            <Link href="/protected" className={linkClass}>Password protected</Link>
            <Link href="/licenses" className={linkClass}>Licenses</Link>
            <Link href="/changelog" className={linkClass}>Changelog</Link>
            <Link href="/webflow-templates" className="text-[#534FFF] text-sm font-medium underline transition-all duration-300">
              More Webflow Templates
            </Link>
          </div>


          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-sm mb-3">Follow us</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="https://facebook.com" className="flex items-center gap-2 group">
                  <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={iconClass}><Facebook size={18} /></motion.span>
                  <span className={linkClass}>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="flex items-center gap-2 group">
                  <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={iconClass}><Twitter size={18} /></motion.span>
                  <span className={linkClass}>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="flex items-center gap-2 group">
                  <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={iconClass}><Instagram size={18} /></motion.span>
                  <span className={linkClass}>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="flex items-center gap-2 group">
                  <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={iconClass}><Linkedin size={18} /></motion.span>
                  <span className={linkClass}>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="flex items-center gap-2 group">
                  <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className={iconClass}><Youtube size={18} /></motion.span>
                  <span className={linkClass}>YouTube</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto mt-16 bg-[#f8f7ff] rounded-2xl shadow-sm px-6 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#725CFF] p-3 rounded-xl">
            <Mail color="white" size={24} />
          </div>
          <div>
            <h5 className="text-base md:text-lg font-bold text-[#0F086A]">
              Subscribe to our newsletter
            </h5>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consecte
            </p>
          </div>
        </div>

        <form className="flex w-full md:w-auto items-center rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full md:w-64 outline-none text-sm text-gray-600"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#4F46E5] px-5 py-3 text-white font-semibold text-sm hover:bg-[#3b36d3]"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.footer>
  )
}
