"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Growth",
    title: "What is average open and clicks rates for email newsletters?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog1.png",
  },
  {
    category: "Marketing",
    title: "6 amazing email templates you can use in 2022 for free",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog2.png",
  },
  {
    category: "Growth",
    title: "Email marketing benchmarks by industry and region",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog3.png",
  },
  {
    category: "Marketing",
    title: "6 amazing email templates you can use in 2022 for free",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog4.png",
  },
  {
    category: "Tech",
    title: "Apple email to block email tracking pixels with ios and ipadOS 15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog5.png",
  },
  {
    category: "Marketing",
    title: "5 Digital platforms every marketer should pay attention to",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog6.png",
  },
  {
    category: "Tech",
    title: "The best email marketting tools of 2022 compared",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog7.png",
  },
  {
    category: "Growth",
    title: "What is the average open and click rates for email newsletters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "November 1, 2021",
    readTime: "7 min read",
    image: "/assets/blog/blog8.png",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.66; // scroll by ~2 cards
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section {...fadeUp} className="bg-[#f8f7ff] h-screen px-4 pt-10 pb-10 overflow-hidden">
      <motion.div {...fadeUp} className="max-w-full mx-auto h-full flex flex-col">
        <motion.div {...fadeUp} className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F086A] max-w-2xl">
            Browse our latest articles and resources on email marketing
          </h2>
          <a
            href="#"
            className="hidden md:inline-block bg-white border border-gray-300 px-5 py-3 rounded-lg text-sm font-semibold text-[#0F086A] hover:text-[#4F46E5] transition"
          >
            Browse all articles
          </a>
        </motion.div>

        <div className="relative flex-1">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#4F46E5] rounded-full text-white flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#4F46E5] rounded-full text-white flex items-center justify-center shadow-md"
          >
            <ArrowRight size={18} />
          </motion.button>

          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(80,80,180,0.10)' }}
                whileTap={{ scale: 0.98 }}
                className="w-[91%] md:w-[46%] lg:w-[46%] h-full bg-white rounded-2xl shadow-md flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="bg-[#E7E6FA] p-8 rounded-t-5xl flex justify-center">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={350}
                    height={160}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-sm text-[#4F46E5] font-semibold mb-2">
                      {article.category}
                    </p>
                    <h3 className="text-lg font-bold text-[#0F086A] mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={16} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
