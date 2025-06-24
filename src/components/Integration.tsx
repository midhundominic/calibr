"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function Integration() {
  return (
    <motion.div {...fadeUp}>
      <motion.section {...fadeUp} className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6">
            Integrated with the tools you know and love
          </h1>
          <p className="text-base text-[#5E5B8A] leading-relaxed">
            Pellentesque id nibh tortor id aliquet lectus proin nibh nisl id
            velit ut tortor pretium viverra suspendisse dictum at tempor commodo
            ullamcorper a lacus vestibulum sed arcu oucibus a pellentesque sit
            amet porttitor eget dolor.
          </p>
          <div className="mt-6 lex justify-center gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              href="/features"
              className="inline-flex px-6 py-3 border border-gray-300 rounded-lg font-semibold text-[#0F086A] hover:text-[#4F46E5] transition"
            >
              Browse all integrations<ArrowRight/>
            </motion.a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="pt-5 w-full">
          <Image
            src="/assets/integration.png"
            alt="Email marketing illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
