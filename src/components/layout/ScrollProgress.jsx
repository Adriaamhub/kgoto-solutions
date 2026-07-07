import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] h-1 bg-orange-500 blur-sm opacity-70"
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut", duration: 0.15 }}
      />

      {/* Main Progress Bar */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          z-[9999]
          h-1
          bg-gradient-to-r
          from-orange-500
          via-orange-400
          to-red-500
          shadow-lg
          shadow-orange-500/50
        "
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut", duration: 0.15 }}
      />
    </>
  );
}