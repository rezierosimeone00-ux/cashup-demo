"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Scene1(): JSX.Element {
  const router = useRouter();
  useEffect(() => { const t = setTimeout(() => router.push("/user"), 7000); return () => clearTimeout(t); }, [router]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <img src="/assets/logo-cashup-h-light.svg" alt="Cashup Logo" className="w-[320px] h-auto mb-6" />
      <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:1.2}} className="text-3xl font-semibold" style={{color:"#D4AF37"}}>
        Turn $80 into $100
      </motion.h1>
      <p className="text-gray-400 mt-2">AI-powered Instant Uplift</p>
    </div>
  );
}
