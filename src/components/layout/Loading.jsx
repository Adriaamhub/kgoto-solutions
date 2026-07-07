import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative text-center">

        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="KGOTO Solutions Group"
          className="mx-auto mb-8 w-20 sm:w-24"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        {/* Spinner */}
        <ClipLoader
          color="#F97316"
          size={65}
          speedMultiplier={1}
        />

        {/* Company Name */}
        <motion.h2
          className="mt-8 text-2xl font-bold tracking-wide text-white"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          KGOTO SOLUTIONS GROUP
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base tracking-[4px] uppercase text-slate-400">
          Building Excellence...
        </p>

        {/* Progress Bar */}
        <div className="mt-8 mx-auto h-1 w-48 overflow-hidden rounded-full bg-slate-700">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-red-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>

      </div>
    </motion.div>
  );
}