"use client";

import Image from "next/image";
import { useState } from 'react';
import Button from "./ui/Button";

const testimonials = [
    {
        name:'Lilly Allen',
        title:'VP of Marketting',
        avatar: '/assets/avatar/avatar1.png',
        logo:'/assets/avatar/avatar1_company.svg',
        quote:'"The best email marketing tool"',
        text:'Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit amet mauris in aliquam sem fringilla ut morbi tincidunt dis parturient montes nascetur ridiculus.'

    },
    {
        name:'Michael Scott',
        title:'VHead of Email',
        avatar: '/assets/avatar/avatar2.png',
        logo:'/assets/avatar/av2_company.svg',
        quote:`"It helped double our email ROI"`,
        text:`Mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices.`

    },
    {
        name:'Anne Williams',
        title:'Inbound Lead',
        avatar: '/assets/avatar/avatar1.png',
        logo:'/assets/avatar/avatar1_company.svg',
        quote:"Simple, fast and effective",
        text:'Gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo.',
    }
]


export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];
  
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Card */}
        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <Image
            src={active.avatar}
            alt={active.name}
            width={120}
            height={120}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0F086A] mb-4">{active.quote}</h3>
            <p className="text-[#5E5B8A] mb-6">{active.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#0F086A]">{active.name}</p>
                <p className="text-[#5E5B8A]">{active.title}</p>
              </div>
              {active.logo && (
                <Image src={active.logo} alt="logo" width={80} height={30} className="h-auto" />
              )}
            </div>
          </div>
        </div>
  
        <div className="flex gap-6 justify-center mt-10">
          {testimonials.map((person, index) => (
            <button
              key={person.name}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 px-2 py-2 rounded-lg transition ${
                activeIndex === index ? 'bg-white shadow-md' : ''
              }`}
            >
              <Image
                src={person.avatar}
                alt={person.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-left">
                <p
                  className={`text-sm font-semibold ${
                    activeIndex === index ? 'text-[#0F086A]' : 'text-gray-400'
                  }`}
                >
                  {person.name}
                </p>
                <p
                  className={`text-sm ${
                    activeIndex === index ? 'text-[#5E5B8A]' : 'text-gray-300'
                  }`}
                >
                  {person.title}
                </p>
              </div>
            </button>
          ))}
        </div>
  
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Button href="/"/>
          <button className="bg-white text-[#0F086A] font-semibold px-6 py-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            View pricing
          </button>
        </div>
      </div>
    );
  }