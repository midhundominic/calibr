"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Integration() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
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
            <a
              href="/features"
              className="inline-flex px-6 py-3 border border-gray-300 rounded-lg font-semibold text-[#0F086A] hover:text-[#4F46E5] transition"
            >
              Browse all integrations<ArrowRight/>
            </a>
          </div>
        </div>

        <div className="pt-5 w-full">
          <Image
            src="/assets/integration.png"
            alt="Email marketing illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
    </div>
  );
}
