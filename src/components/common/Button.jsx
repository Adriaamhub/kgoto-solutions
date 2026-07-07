import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({
  text,
  link = "/",
  primary = true,
  icon,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to={link}
        className={`
          group relative inline-flex items-center justify-center gap-3
          overflow-hidden rounded-full
          px-6 py-3.5
          sm:px-7 sm:py-4
          lg:px-8 lg:py-4
          text-sm sm:text-base
          font-semibold
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-orange-300
          ${
            primary
              ? `
                bg-gradient-to-r
                from-orange-500
                via-orange-600
                to-red-500
                text-white
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-0.5
              `
              : `
                border
                border-slate-300
                bg-white/80
                backdrop-blur
                text-slate-800
                hover:bg-slate-900
                hover:text-white
                hover:border-slate-900
              `
          }
          ${className}
        `}
      >
        {/* Shine Effect */}
        <span
          className="
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10">{text}</span>

        {icon && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </Link>
    </motion.div>
  );
}