import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          whileHover={{
            scale: 1.12,
            y: -4,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{ duration: 0.3 }}
          className="
            group
            fixed
            bottom-5
            right-5
            sm:bottom-6
            sm:right-6
            lg:bottom-8
            lg:right-8
            z-50

            flex
            items-center
            justify-center

            w-12
            h-12
            sm:w-14
            sm:h-14

            rounded-full

            bg-gradient-to-r
            from-orange-500
            via-orange-600
            to-red-500

            text-white

            shadow-xl
            shadow-orange-500/40

            backdrop-blur-xl

            transition-all
            duration-300
          "
        >
          {/* Shine Effect */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              -translate-x-full
              group-hover:translate-x-full
              transition-transform
              duration-700
            "
          />

          <FaArrowUp className="relative z-10 text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}