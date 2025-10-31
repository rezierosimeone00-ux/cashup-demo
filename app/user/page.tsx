"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Scene2() {
  const router = useRouter();
  useEffect(() => { const t = setTimeout(() => router.push("/merchant"), 7000); return () => clearTimeout(t); }, [router]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-6 text-center">
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="text-3xl mb-3" style={{color:"#D4AF37"}}>User Experience</motion.h2>
      <p className="text-gray-300 max-w-xl">Users register, select a local Drop, and instantly receive uplifted value to spend.</p>
    </div>
  );
}
