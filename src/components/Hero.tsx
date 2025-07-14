import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-[#0a0a0a] dark:via-[#171717] dark:to-[#232323]">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300"
      >
        Hi, I’m <span className="inline-block">Daramola Daniel</span>
        <br />
        <span className="text-xl sm:text-3xl font-light block mt-2">a Creative Developer</span>
      </motion.h1>
      {/* Optional: Animated blob or 3D element here */}
    </section>
  );
}
