"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Lilly Allen",
    title: "VP of Marketing",
    avatar: "/assets/avatar/avatar1.png",
    logo: "/assets/avatar/avatar1_company.svg",
    quote: '"The best email marketing tool"',
    text: "Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit.",
  },
  {
    name: "Michael Scott",
    title: "Head of Email",
    avatar: "/assets/avatar/avatar2.png",
    logo: "/assets/avatar/av2_company.svg",
    quote: '"It helped double our email ROI"',
    text: "Mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices.",
  },
  {
    name: "Anne Williams",
    title: "Inbound Lead",
    avatar: "/assets/avatar/avatar1.png",
    logo: "/assets/avatar/avatar1_company.svg",
    quote: '"Simple, fast and effective"',
    text: "Gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <motion.div {...fadeUp} className="max-w-6xl mx-auto px-6 py-20">

      <div className="flex gap-6 justify-center flex-wrap mb-10 md:hidden">
        {testimonials.map((person, index) => (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            key={person.name}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeIndex === index ? "bg-white shadow-md" : ""
            }`}
          >
            <Image
              src={person.avatar}
              alt={person.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p
                className={`text-sm font-semibold ${
                  activeIndex === index ? "text-[#0F086A]" : "text-gray-400"
                }`}
              >
                {person.name}
              </p>
              <p
                className={`text-sm ${
                  activeIndex === index ? "text-[#5E5B8A]" : "text-gray-300"
                }`}
              >
                {person.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="relative mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.4, ease: "easeIn" } }}
            className="bg-white shadow-lg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center min-h-[380px] absolute w-full"
            style={{ position: 'absolute' }}
          >
            <Image
              src={active.avatar}
              alt={active.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0F086A] mb-4">
                {active.quote}
              </h3>
              <p className="text-[#5E5B8A] mb-6 leading-relaxed">{active.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0F086A]">{active.name}</p>
                  <p className="text-[#5E5B8A]">{active.title}</p>
                </div>
                {active.logo && (
                  <Image
                    src={active.logo}
                    alt="logo"
                    width={80}
                    height={30}
                    className="h-auto"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div style={{ height: 380 }} />
      </div>

      <div className="hidden md:flex gap-6 justify-center mt-10 flex-wrap">
        {testimonials.map((person, index) => (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            key={person.name}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeIndex === index ? "bg-white shadow-md" : ""
            }`}
          >
            <Image
              src={person.avatar}
              alt={person.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p
                className={`text-sm font-semibold ${
                  activeIndex === index ? "text-[#0F086A]" : "text-gray-400"
                }`}
              >
                {person.name}
              </p>
              <p
                className={`text-sm ${
                  activeIndex === index ? "text-[#5E5B8A]" : "text-gray-300"
                }`}
              >
                {person.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10 px-4">
        <Button href="/" text="Get Started" />
        <button className="bg-white text-[#0F086A] font-semibold px-6 py-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          View pricing
        </button>
      </div>
    </motion.div>
  );
}