'use client';

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface ButtonProps{
    text?:string;
    href:string;
    className?:string;
}

export default function Button({text='Get Started',href}:ButtonProps){
    const router = useRouter();

    return(
        <button
          onClick={()=>router.push(href)}
          className="flex items-center gap-1 bg-[#524FFF] text-white font-bold text-md leading-[3px] py-5 px-8 rounded-lg border border-transparent  transition-transform transition-shadow duration-300 cursor-pointer"
        >
            {text} <ArrowRight size={16}/>
        </button>
    );
}